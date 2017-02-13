/**
 * Created by zhulizhe on 2017/2/2.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const initialState = {
    recommendList:[],
    hotList:[]
}

export default function homeDataReducer(state=initialState,action={}) {
    switch(action.type){
        case 'LOAD_MORE_DATA':
            return state
            break;
        default:
            return state
    }
}

