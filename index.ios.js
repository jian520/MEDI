'use strict';
//react-native bundle --entry-file index.ios.js --platform ios --dev false --bundle-output release_ios/main.jsbundle --assets-dest release_ios/
import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
 import App from './app/index';

 
// import App from './app/index';
// import App2 from './TabNavigation/index';
// import App3 from './login_redux/index';
// import App from './ReactNavigation/App';

AppRegistry.registerComponent('MEDI', () => App);
