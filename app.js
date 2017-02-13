/**
 * Created by zhulizhe on 2017/2/2.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Launch from './launch'

import * as reducers from './reducers'
const reducer = combineReducers(reducers)
const store = createStore(reducer)

export default class App extends Component{
    render(){
        return <Provider store={store}>
            <Launch />
        </Provider>
    }
}