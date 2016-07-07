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
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';

module.exports = React.createClass({
  getInitialState() {
     return {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.922,
        longitudeDelta: 0.421,
        clickedState: 'Friends'
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
          <ActionButton 
            buttonColor = "rgba(231,76,60,1)" 
            icon = {this.state.clickedState == 'Friends' ? <Icon name="users" color={'#FFF'} style={styles.actionButtonIcon} /> : <Icon name="ambulance" color={'#FFF'} style={styles.actionButtonIcon} />} 
            degrees={0}>
            <ActionButton.Item buttonColor='white' title="Friends" onPress={() => {this.setState({clickedState: 'Friends'})}}>
              <Icon name="users" color={'rgba(231,76,60,1)'} style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='white' title="Establishments" onPress={() => {this.setState({clickedState: 'Establishments'})}}>
              <Icon name="ambulance" color={'rgba(231,76,60,1)'} style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
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
