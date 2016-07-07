import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AsyncStorage,
  Image,
  ScrollView
} from 'react-native';

import {Card, Button} from 'react-native-material-design';

module.exports = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'Home',
    };
  },
  render(){
    return (
        <ScrollView style={styles.container}>
        <Card>
            <Card.Media
                image={<Image source={{uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVp5jlYlhHRiaBmh2eYXndB1urSzGVDJ3Oym56FPcU0I1ei10w'}} />}
                overlay
            />
            <Card.Body>
                <Text style={{fontWeight: 'bold'}}>Snow Storm Signal No. 1</Text>
            </Card.Body>
            <Card.Actions position="right">
                <Button text="Read More"/>
            </Card.Actions>
        </Card>
        <Card>
            <Card.Media
                image={<Image source={{uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVp5jlYlhHRiaBmh2eYXndB1urSzGVDJ3Oym56FPcU0I1ei10w'}} />}
                overlay
            />
            <Card.Body>
                <Text style={{fontWeight: 'bold'}}>Snow Storm Signal No. 1</Text>
            </Card.Body>
            <Card.Actions position="right">
                <Button text="Read More"/>
            </Card.Actions>
        </Card>
        <Card>
            <Card.Media
                image={<Image source={{uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVp5jlYlhHRiaBmh2eYXndB1urSzGVDJ3Oym56FPcU0I1ei10w'}} />}
                overlay
            />
            <Card.Body>
                <Text style={{fontWeight: 'bold'}}>Snow Storm Signal No. 1</Text>
            </Card.Body>
            <Card.Actions position="right">
                <Button text="Read More"/>
            </Card.Actions>
        </Card>
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
