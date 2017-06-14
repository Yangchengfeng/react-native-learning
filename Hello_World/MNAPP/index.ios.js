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
  Image
} from 'react-native';

export default class MNAPP extends Component {
  render() {
    return (
      <View style={styles.view_0}>
        <View style={[styles.view_1, styles.row]}>
          <View style={[{flex:1}, styles.border_right]}>
            <View style={{flex:1}}>
              <Text style={[styles.font18, styles.marTop27, styles.marLeft10, styles.green]}>我们约吧</Text>
              <Text style={[styles.font16, styles.marTop14, styles.marLeft10]}>恋爱家人好朋友</Text>
            </View>
            <View style={{flex:1}}>
              <Image style={[styles.yue]} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
            </View>
          </View>
          <View style={{flex:2}}>
            <View style={[{flex:1}, {flexDirection: 'row'}, styles.border_Bottom]}>
              <View style={{flex:1}}>
              </View>
              <View style={{flex:1}}>
              </View>
            </View>
            <View style={[{flex:1}, {flexDirection: 'row'}]}>
              <View style={[{flex:1}, styles.border_right]}>
              </View>
              <View style={{flex:1}}>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.view_margin}>
        </View>
        <View style={[styles.view_2, {paddingRight: 10}]}>
          <View style={[{flex:1}, {flexDirection:'row'}, {borderBottomWidth: 1}, {borderColor: '#DDD8CE'}]}>
            <View style={{flex:1}}></View>
            <View style={{flex:1}}></View>
          </View>
          <View style={[{flex:1}, {flexDirection:'row'}, {borderBottomWidth: 1}, {borderColor: '#DDD8CE'}]}>
            <View style={[{flex:1}, styles.border_right]}></View>
            <View style={{flex:1}}></View>
          </View>
          <View style={[{flex:1}, {flexDirection:'row'}, {borderBottomWidth: 1}, {borderColor: '#DDD8CE'}]}>
            <View style={[{flex:1}, styles.border_right]}></View>
            <View style={{flex:1}}></View>
          </View>
        </View>
        <View style={styles.view_margin}>
        </View>
        <View style={[styles.view_3, {flexDirection:'row'}]}>
          <View style={[{flex:1}, styles.white_border, styles.third_left_view]}>
            <View style={[{width: 5}, {backgroundColor:'white'}]}></View>
            <Image style={styles.pic} source={{uri: ' '}}></Image>
          </View>
          <View style={[{flex:3}, styles.white_border, styles.third_middle_view]}>
            <View style={{flex:1}}></View>
            <View style={{flex:1}}></View>
          </View>
          <View style={[{flex:4}, styles.white_border, styles.third_right_view]}>
            <View style={[{flex:1}, {borderBottomWidth: 3}, {borderColor: 'white'}]}></View>
            <View style={{flex:1}}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_0: {
    flex: 1,
  },
  view_1: {
    flex: 1.5,
  },
  view_2: {
    flex: 2,
  },
  view_3: {
    flex: 1.5,
    backgroundColor: '#F6F6F6',
  },
  view_margin: {
    height: 15,
    backgroundColor: '#ECEAE9',
  },
  row: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
    paddingRight: 10,
  },
  border_right: {
    borderColor:'#DDD8CE',
    borderRightWidth:1,
  },
  border_Bottom: {
    borderColor:'#DDD8CE',
    borderBottomWidth:1,
  },
  white_border: {
    borderColor:'white',
  },
  third_left_view: {
    borderTopWidth: 5,
    borderBottomWidth: 5,
  },
  third_middle_view: {
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderRightWidth: 3,
  },
  third_right_view: {
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderRightWidth: 3,
  },
  pic: {
    width: 50,
    height: 50,
  },
  green:{
    color:'#55A44B',
    fontWeight: '900'
  },
  red:{
    color: '#FF3F0D',
    fontWeight: '900'
  },
  marTop27:{
    marginTop: 27,
  },
  marTop14:{
    marginTop: 14,
  },
  marLeft10:{
    marginLeft: 10,
  },
  font18:{
    fontSize: 18,
  },
  font16:{
    fontSize: 16,
  },
  yue:{
    height: 100,
  },
});

AppRegistry.registerComponent('MNAPP', () => MNAPP);
