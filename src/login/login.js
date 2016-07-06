import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

module.exports = React.createClass({
  render(){
    return (
      <View style={styles.container}>
        <LoginButton 
          publishPermissions  ={["publish_actions"]}
          onLoginFinished  = {
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                    AsyncStorage.setItem('FacebookToken', data.accessToken.toString())
                    this.loginSuccess();
                  }
                )
              }
            }
          }
          onLogoutFinished = {() => alert("logout.")}/>
      </View>
      )
  },

  loginSuccess() {
    this.props.navigator.push({'name': 'tabs'});
  },

  componentWillMount() {
    var $this = this;
    AsyncStorage.getItem('FacebookToken')
    .then((value) => {
      if(value) {
        $this.props.navigator.push({'name': 'tabs'});
      }
    })
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#293a50',
  },
});

AppRegistry.registerComponent('Login', () => Login);
