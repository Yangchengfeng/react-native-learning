/**
 * Created by yangchengfeng on 17/6/14.
 */

import React, { Component } from 'react';
import Swiper from 'react-native-swiper';

import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    ScrollView,
    Text,
    TouchableHighlight
} from 'react-native';

var sliderImgs = [
    'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

export class Slider extends Component {
    render() {
        return (
            <Swiper showsButtons={false} autoplay={true} height={94} showsPagination={false}>
                <Image style={styles.slide} source={{uri: sliderImgs[0]}}></Image>
                <Image style={styles.slide} source={{uri: sliderImgs[1]}}></Image>
                <Image style={styles.slide} source={{uri: sliderImgs[2]}}></Image>
            </Swiper>
        );
    }
}

export default class Index extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Slider/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F2F2F2',
        flex:1,
    },
    slide: {
        height:94,
        resizeMode: Image.resizeMode.contain,
    },
});

AppRegistry.registerComponent('Index', () => Index);
