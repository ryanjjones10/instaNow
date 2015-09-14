var React = require('react-native');

var {
  View,
  WebView,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});

class Web extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <WebView url='https://insta-now.herokuapp.com/authorize_user'/>
      </View>
    )
  }
};

module.exports = Web;