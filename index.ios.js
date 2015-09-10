'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  }
});

class instaNow extends React.Component{
  render () {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{ title: 'instaNow', component: Main}}
      />
    );
  }
};


AppRegistry.registerComponent('instaNow', () => instaNow);
