/**
 * Created by zhulizhe on 2017/1/16.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import Splash from './component/Splash'
import StatusBarIOS from './component/StatusBarIOS';

export default class Launch extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBarIOS barStyle="default"/>
                <Navigator
                    initialRoute={{ name: 'Splash', component: Splash }}
                    configureScene={(route) => {
                        if (route.sceneConfig) {
                            return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromRight;
                    } }
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.passProps} />
                        )
                    } }
                />
            </View>
        )
    }
}
