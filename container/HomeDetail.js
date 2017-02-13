/**
 * Created by zhulizhe on 2017/1/17.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    InteractionManager,
    TouchableOpacity
} from 'react-native';

export default class HomeDetail extends Component {
    _push(){
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.pop();
        });
    }

    render() {
        return (<View style={styles.container}>
            <TouchableOpacity
              onPress={this._push.bind(this)}>
            <Text >go详情</Text>
            </TouchableOpacity>
        </View>);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red'
    }
})