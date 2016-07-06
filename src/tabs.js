import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

var TabNavigator = require('react-native-tab-navigator').default;

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

module.exports = React.createClass({
  render(){
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <LoginButton
          onLogoutFinished={() => this.logout()}/>
      </View>
      )
  },

  logout() {
    this.props.navigator.popToTop()
    AsyncStorage.removeItem('FacebookToken');
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

AppRegistry.registerComponent('Tabs', () => Tabs);
