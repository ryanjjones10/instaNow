var React = require('react-native');
var api = require('../Utils/Api');
var Web_view = require('./Helpers/webView')
var io = require('socket.io-client/socket.io')
window.navigator.userAgent = 'react-native';

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView,
  ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // padding: 30,
    // marginTop: 65,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  image: {
    height: 200,
  },
});


class Main extends React.Component{
  constructor(props){
    super(props);
    this.socket = io('https://insta-now.herokuapp.com', {jsonp: false});
    this.state = {
      lat: '37.773081',
      lng: '-122.422834',
      isloading: false,
      error: false,
      recentPhotos: []
    }
  }
  openPage(){
    this.props.navigator.push({
      component: Web_view,
      title: 'WebView'
    })
  }
  componentDidMount(){
    this.socket.on('recent', this.handleRecentImages);
  }
  handleRecentImages(data){
    console.log('recent data from websockets ', data)
    for(var i = 0; i < data.length; i++){
      this.state.recentPhotos.push({
        link: data[i].link,
        imageUrl: data[i].images.low_resolution.url
      });
    }
  }
  render(){
    return (
      <ScrollView style={styles.mainContainer}>
        <View>
          <Image style={styles.image} source={{uri: 'http://dreamatico.com/data_images/car/car-3.jpg'}}/>
        </View>
        <TouchableHighlight style={styles.button} onPress={this.openPage.bind(this)} underlayColor='white'>
          <Text style={styles.buttonText}> SignIn </Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS animating={this.state.isloading} color='#111' size='large'></ActivityIndicatorIOS>
      </ScrollView>
    )
  }
};

module.exports = Main;