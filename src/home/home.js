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

import {Card, Button} from 'react-native-material-design';

module.exports = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'Home',
    };
  },
  viewArticle() {
    this.props.mainNavigator.push({name: "article", image: 'https://i.ytimg.com/vi/XiWRUfz_zjw/maxresdefault.jpg', articleHeadline: 'Snow Storm Signal No. 1', mainNavigator: this.props.mainNavigator});
  },
  render(){
    return (
        <ScrollView style={styles.container}>
          <TouchableHighlight onPress={this.viewArticle} underlayColor={'none'}>
            <View>
              <Card>
                  <Card.Media
                      image={<Image source={{uri: 'https://i.ytimg.com/vi/XiWRUfz_zjw/maxresdefault.jpg'}} />}
                      overlay
                  />
                  <Card.Body>
                      <Text style={{fontWeight: 'bold'}}>Snow Storm Signal No. 1</Text>
                  </Card.Body>
                  <Card.Actions position="right">
                      <Button text="Read More" onPress={this.viewArticle}/>
                  </Card.Actions>
              </Card>
            </View>
          </TouchableHighlight>
        </ScrollView>
      )
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('Home', () => Home);
