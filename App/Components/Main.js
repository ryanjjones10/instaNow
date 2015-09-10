var React = require('react-native');
// var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
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
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      isloading: false,
      error: false
    }
  }
  render(){
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a Github User</Text>
        <TextInput style={styles.searchInput} value={this.state.username} />
        <TouchableHighlight style={styles.button} underlayColor='white'>
          <Text style={styles.buttonText}> Search </Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS animating={this.state.isloading} color='#111' size='large'></ActivityIndicatorIOS>
      </View>
    )
  }
};

module.exports = Main;