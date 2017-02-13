'use strict';

import React from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View,
    Text,
} from 'react-native';

import PigRun from '../home';

var {height, width} = Dimensions.get('window');

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {navigator} = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: PigRun,
                    passProps: {navigator: navigator}
                });
            });
        }, 2000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Image
                    style={{flex:1,width:width,height:height}}
                    source={require('../images/Default.png')}
                />
            </View>
        );
    }
}
export default Splash;