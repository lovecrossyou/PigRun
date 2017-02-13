/**
 * Created by zhulizhe on 2017/1/15.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
//引入tabbar支持包
import TabNavigator from 'react-native-tab-navigator';
import Home from './container/Home'
const TabNavigatorItem =TabNavigator.Item;

const TAB_NORMAL_1=require('./images/tabbar_1.png');
const TAB_NORMAL_2=require('./images/tabbar_2.png');
const TAB_NORMAL_3=require('./images/tabbar_3.png');
const TAB_NORMAL_4=require('./images/tabbar_4.png');

const TAB_PRESS_1=require('./images/tabbar_1_press.png');
const TAB_PRESS_2=require('./images/tabbar_2_press.png');
const TAB_PRESS_3=require('./images/tabbar_3_press.png');
const TAB_PRESS_4=require('./images/tabbar_4_press.png');

export default class PigRun extends Component {
    // const {navigator} = this.props;
    constructor() {
        super();
        this.state = {
            selectedTab: 'home'
        }
    }

    onPress(tabName) {
        if (tabName) {
            this.setState({
                selectedTab:tabName
            })
        }
    }

    renderTabItem(title,tabName,content,badgeCount){
        var tabNormal;
        var tabSelected;
        switch(tabName){
            case 'home':
                tabNormal = TAB_NORMAL_1;
                tabSelected = TAB_PRESS_1;
                break;
            case 'freeStyle':
                tabNormal = TAB_NORMAL_2;
                tabSelected = TAB_PRESS_2;
                break;
            case 'play':
                tabNormal = TAB_NORMAL_3;
                tabSelected = TAB_PRESS_3;
                break;
            case 'game':
                tabNormal = TAB_NORMAL_4;
                tabSelected = TAB_PRESS_4;
                break;
            default:
        }
        const {navigator} = this.props
        return <TabNavigatorItem
            title={title}
            renderIcon={()=><Image style={styles.tabIcon} source={tabNormal}/>}
            renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabSelected}/>}
            selectedTitleStyle={{color:'#f85959'}}
            selected={this.state.selectedTab===tabName}
            onPress={()=>this.onPress(tabName)}
        >
            {tabName=='home' ? <Home style={styles.container} navigator={navigator}/>:
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>{content}</Text>
                </View>
            }

        </TabNavigatorItem>
    }

    /**
     自定义tabbar
     **/
    tabBarView(){
        return (
            <View style={{flex:1}}>
                <TabNavigator
                    tabBarStyle={styles.tab}
                >
                    {this.renderTabItem('头条','home','头条板块',true)}
                    {this.renderTabItem('无厘头','freeStyle','笑话漫画小说影评',false)}
                    {this.renderTabItem('吃喝玩乐','play','吃喝玩乐你懂的',false)}
                    {this.renderTabItem('游戏','game','游戏时间',false)}
                </TabNavigator>
            </View>
        );
    }

    render() {
        var tabBarView=this.tabBarView();
        return (
            <View style={styles.container}>
                {tabBarView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F5FCFF'
    },
    tabIcon:{
        width:25,
        height:25
    },
    tab:{
        height: 52,
        alignItems:'center',
        backgroundColor:'#f4f5f6',
    }
})
