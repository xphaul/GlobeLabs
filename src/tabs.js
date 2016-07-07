import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AsyncStorage,
  Navigator
} from 'react-native';

import Home from './home/home';
import Maps from './maps/maps';
import Icon from 'react-native-vector-icons/FontAwesome';

var TabNavigator = require('react-native-tab-navigator').default;

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

module.exports = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'Home',
    };
  },
  renderScene(route, navigator){
    var Component   = route.component;
    var title       = route.title;
    return <Component title={title} route={route} navigator={navigator} tabs={this} mainNavigator={this.props.navigator}/>;
  },
  render(){
    console.log(Icon)
    return (
        <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected    = {this.state.selectedTab === 'Home'}
            renderIcon  = {() => <Icon name={"home"} size={30} color={'rgb(204,204,204)'}/>}
            renderSelectedIcon={() => <Icon name={"home"} size={30} color={'rgb(250,130,29)'}/>}
            onPress={() => this.setState({ selectedTab: 'Home' })}>
              <Navigator
                ref={ref => this.props.navigator.auctions = ref}
                initialRoute    = {{component: Home, title:'Home'}}
                renderScene     = {this.renderScene}
                configureScene  = {()=>({...Navigator.SceneConfigs.FadeAndroid,
                                   gestures: false })}
              />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected    = {this.state.selectedTab === 'Maps'}
            renderIcon  = {() => <Icon name={"globe"} size={30} color={'rgb(204,204,204)'}/>}
            renderSelectedIcon={() => <Icon name={"globe"} size={30} color={'rgb(250,130,29)'}/>}
            onPress={() => this.setState({ selectedTab: 'Maps' })}>
              <Navigator
                ref={ref => this.props.navigator.auctions = ref}
                initialRoute    = {{component: Maps, title:'Maps'}}
                renderScene     = {this.renderScene}
                configureScene  = {()=>({...Navigator.SceneConfigs.FadeAndroid,
                                   gestures: false })}
              />
          </TabNavigator.Item>
        </TabNavigator>
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
  },
});

AppRegistry.registerComponent('Tabs', () => Tabs);
