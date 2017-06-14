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
  View
} from 'react-native';

export default class MNAPP extends Component {
  render() {
    return (
      // <View style={[styles.flex_view_0, {flexDirection: 'row'}]}>
      //   <View style={[styles.flex_view_1, , styles.left]}>
      //     <Text style={{fontSize: 20}}>1/3靠左摆放</Text>
      //   </View>
      //   <View style={[styles.flex_view_1, styles.center]}>
      //     <Text style={{fontSize: 20}}>1/3居中摆放</Text>
      //   </View>
      //   <View style={[styles.flex_view_1, styles.right]}>
      //     <Text style={{fontSize: 20}}>1/3靠右摆放</Text>
      //   </View>
      // </View>
      <View style={styles.view_0}>
        <View style={styles.view_1}>
          <Text style={{fontSize: 20}}>
            方块居中
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_0: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_1: {
    borderWidth: 1,
    borderColor: 'blue',
    height: 44,
  },
  // flex_view_0: {
  //   flex: 1,
  //   borderWidth: 1,
  //   borderColor: 'green',
  // },
  // flex_view_1: {
  //   flex: 2,
  //   borderWidth: 1,
  //   borderColor: 'green',
  // },
  // center: {
  //   alignSelf: 'center',
  // },
  // left: {
  //   alignSelf: 'flex-start',
  // },
  // right: {
  //   alignSelf: 'flex-end',
  // },
});

AppRegistry.registerComponent('MNAPP', () => MNAPP);
