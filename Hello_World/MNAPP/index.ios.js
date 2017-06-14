/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Index from './pages/Index';

import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

export default class MNAPP extends Component {
  render() {
    return (
        <NavigatorIOS style={styles.container}
                      initialRoute={{title: '首页', component: Index,}}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('MNAPP', () => MNAPP);
