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
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homepage',
    };
  }
  render() {
    return (
      <TabBarIOS  unselectedTintColor="black"
                  tintColor="red"
                  barTintColor= 'white'>
        <TabBarIOS.Item title="首页"
                        selected={this.state.selectedTab === 'homepage'}
                        icon={require('./myIcon/lf_tabbar_home.png')}
                        selectedIcon={require('./myIcon/lf_tabbar_home_selected.png')}
                        renderAsOriginal={true}
                        onPress={() => {
                          this.setState({
                            selectedTab: 'homepage'
                          });}}>
          <View></View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="微淘"
                        selected={this.state.selectedTab === 'weitao'}
                        icon={require('./myIcon/lf_tabbar_order.png')}
                        selectedIcon={require('./myIcon/lf_tabbar_order_selected.png')}
                        renderAsOriginal={true}
                        onPress={() => {
                          this.setState({
                            selectedTab: 'weitao'
                          });}}>
          <View></View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="社区"
                        selected={this.state.selectedTab === 'shequ'}
                        icon={require('./myIcon/lf_tabbar_order.png')}
                        selectedIcon={require('./myIcon/lf_tabbar_order_selected.png')}
                        renderAsOriginal={true}
                        onPress={() => {
                          this.setState({
                            selectedTab: 'shequ'
                          });}}>
           <View></View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="购物车"
                        selected={this.state.selectedTab === 'cart'}
                        icon={require('./myIcon/lf_tabbar_cart.png')}
                        selectedIcon={require('./myIcon/lf_tabbar_cart_selected.png')}
                        renderAsOriginal={true}
                        onPress={() => {
                          this.setState({
                            selectedTab: 'cart'
                          });}}>
          <View></View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="我的淘宝"
                        selected={this.state.selectedTab === 'mine'}
                        icon={require('./myIcon/lf_tabbar_order.png')}
                        selectedIcon={require('./myIcon/lf_tabbar_order_selected.png')}
                        renderAsOriginal={true}
                        onPress={() => {
                          this.setState({
                            selectedTab: 'mine'
                          });}}>
          <View></View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MNAPP', () => MNAPP);
