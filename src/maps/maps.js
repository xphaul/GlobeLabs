import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import MapView from 'react-native-maps';

module.exports = React.createClass({
  getInitialState() {
     return {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
  },

  componentDidMount() {
    var $this = this;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if(position) {
          var longitude = position.coords.longitude;
          var latitude = position.coords.latitude;
          $this.setState({longitude: longitude, latitude: latitude})
        }
      },
      (error) => {
        console.log(error)
      },
      {enableHighAccuracy: false}
    );
  },

  render(){
    return (
        <View style={styles.container}>
          <MapView
              style={styles.map}
              region={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
          </MapView>
        </View>
      )
  },
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

AppRegistry.registerComponent('Maps', () => Maps);
