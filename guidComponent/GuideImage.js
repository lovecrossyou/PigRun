/**
 * Created by zhulizhe on 2017/1/19.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class GuideImage extends Component {
    _close(){

    }
    render() {
        return (<Image style={styles.container} source={this.props.image}>
            <View style={styles.text}>
                <TouchableOpacity onPress={() => {this._close()}}>
                <Text >进入主页</Text>
                </TouchableOpacity>
            </View>
        </Image>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'flex-end',
        justifyContent:'center'
    },
    text: {
        alignSelf:'center'
    }
});
