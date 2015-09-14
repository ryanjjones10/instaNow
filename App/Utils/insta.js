var instagram = require('instagram-node-lib');
var keys = require('../config.js');
instagram.set('client_id', keys.InstaClientID);
instagram.set('client_secret', keys.InstaClientSecret);

var insta = {

  getInstaData : function(latitude, longitude, distance, callback){
    instagram.media.search({lat: latitude, lng: longitude, distance: distance, complete: function(data){
      callback(data);
    }});
  },

  // call to instagram for each coordinate set and return to client
  obtainInstaData : function(lat, lng, callback){
    var results = [];
    var dist = 20; // dist unit: m, max: 5000m

    this.getInstaData(lat, lng, dist, photoParser.bind(this));
    // parse instagram data object
    var photoParser =  function(data){
      var photoArray = [];
      for(var i = 0; i < data.length; i++){
        photoArray.push({
          link: data[i].link,
          url: data[i].images.low_resolution.url,
          location: data[i].location
        });
      }
      results.push(photoArray);
      return photoArray;
    };
  }

};

module.exports = insta;