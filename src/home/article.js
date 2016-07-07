import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AsyncStorage,
  Image,
  ScrollView,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

module.exports = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'Home',
    };
  },
  goBack() {
    this.props.route.mainNavigator.pop();
  },
  render(){
    return (
        <View style={styles.container}>
          <Image source={{uri: this.props.route.image}} style={styles.articleImage}>
            <TouchableHighlight onPress={this.goBack} underlayColor={'none'}>
            <Icon name={"close"} size={30} color={'#FFF'}/>
          </TouchableHighlight>
          </Image>
          <ScrollView style={{padding: 10}}>
            <Text>{this.props.route.articleHeadline}</Text>
          </ScrollView>
        </View>
      )
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  articleImage: {
    height: 200,
    paddingTop: 10,
    paddingLeft: 5
  }
});

AppRegistry.registerComponent('Article', () => Article);
