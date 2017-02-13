/**
 * Created by huibei on 17/1/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';


let firstImage = require('../images/guide/red_packet_lg.png');
let secondImage = require('../images/guide/red_packet_lg.png');
let thirdImage = require('../images/guide/red_packet_lg.png');

import Util from '../Util'
import GuideImage from './GuideImage'
import Home from '../container/Home'
export default class GuideView extends Component{
    render(){
        return (<ScrollView
            contentContainerStyle={styles.container}
            bounces={false}
            pagingEnabled={true}
            horizontal={true}>
            <GuideImage image={firstImage} style={styles.backgroundImage} />
            <GuideImage image={secondImage} style={styles.backgroundImage} />
            <GuideImage image={thirdImage} style={styles.backgroundImage} />
        </ScrollView>);
    }
}

const styles = StyleSheet.create({
    container:{
        width:Util.size.width*3,
        height:Util.height
    },
    backgroundImage:{
        width:Util.size.width,
        height:Util.size.height
    }
})