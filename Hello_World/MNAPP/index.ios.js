/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

export default class MNAPP extends Component {
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item title="首页" icon={require('./myIcon/lf_tabbar_home.png')} selectedIcon={require('./myIcon/lf_tabbar_home_selected.png')}>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="微淘">
        </TabBarIOS.Item>
        <TabBarIOS.Item title="社区">
        </TabBarIOS.Item>
        <TabBarIOS.Item title="购物车">
        </TabBarIOS.Item>
        <TabBarIOS.Item title="我的淘宝">
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MNAPP', () => MNAPP);
