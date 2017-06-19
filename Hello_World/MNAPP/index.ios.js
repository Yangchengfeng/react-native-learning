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

import Homepage from './View/ios_views/homepage';
import Weitao from './View/ios_views/weitao';
import Cart from './View/ios_views/cart';
import Shequ from './View/ios_views/shequ';
import Mine from './View/ios_views/mine';

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
                  barTintColor='white'
                  backgroundColor='white'
                  translucent={false}>
        <TabBarIOS.Item title="首页"
                        selected={this.state.selectedTab === 'homepage'}
                        icon={require('./myIcon/lf_tabbar_home.png')}
                        selectedIcon={require('./myIcon/lf_tabbar_home_selected.png')}
                        renderAsOriginal={true}
                        onPress={() => {
                          this.setState({
                            selectedTab: 'homepage'
                          });}}>
          {this._renderView()}
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
          {this._renderView()}
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
          {this._renderView()}
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
          {this._renderView()}
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
          {this._renderView()}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

  _renderView() {
    var view = null;
    switch (this.state.selectedTab) {
      case 'homepage':
        view = <Homepage></Homepage>
        break;
      case 'weitao':
        view = <Weitao></Weitao>
        break;
      case 'shequ':
        view = <Shequ></Shequ>
        break;
      case 'cart':
        view = <Cart></Cart>
        break;
      case 'mine':
        view = <Mine></Mine>
        break;
    }
    return view;
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MNAPP', () => MNAPP);
