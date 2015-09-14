var api = {
  getImage(lat, lng){
    var url = `https://api.instagram.com/v1/locations/search?lat=${lat}&lng=${lng}&distance=20&`;
    return fetch(url).then((res) => res.json());
  },
};

module.exports = api;