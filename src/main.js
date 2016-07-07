'use strict';

import React, { Component} from 'react';
import {
	StyleSheet,
	Navigator
} from 'react-native';

import Login from './login/login';
import Home from './home/home';
import Article from './home/article';
import Maps from './maps/maps';

// var Tutorial = require('./login/tutorial');
import Tabs from './tabs';
// // var Last = require('./network/filters');
// // var WebView = require('./components/common/web-view');
// var LinkedInLogin = require('./login/linkedInLogin');

var ROUTES = {
	// tutorial: Tutorial,
	tabs: Tabs,
	// // last: Last,
	// // webview: WebView,
	login: Login,
	home: Home,
	maps: Maps,
	article: Article,
	// linkedInLogin: LinkedInLogin
};

module.exports = React.createClass({
	renderScene: function(route, navigator){
		var Component = ROUTES [route.name];
		return <Component  route={route} navigator={navigator}/>;
	},
	render: function(){
		return (
				<Navigator
				style={styles.container}
				initialRoute={{name:'login'}}
				renderScene={this.renderScene}
				configureScene={() => ({...Navigator.SceneConfigs.FloatFromBottom,
												gestures: false })}/>

			);
	}
});

var styles = StyleSheet.create({
	container: {
		flex:1
	},
})
