import React, { Component } from 'react';
import codePush from "react-native-code-push" ;
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  InteractionManager,
  StatusBar,
  Platform,
} from 'react-native';


import ScrollableTabView,{ ScrollableTabBar } from 'react-native-scrollable-tab-view';
import HomeDetail from './HomeDetail'
import NewsList from '../component/NewsList'
/**
首页
**/
export default class Home extends Component{
  render(){
    const{navigator}=this.props;
    return(
      <View style={styles.container}>
      <StatusBar
       backgroundColor='#1a191f'
       barStyle='light-content'
       animated={true}
       hidden={false}
      />
      {Platform.OS=='ios'?<View style={{height:15,backgroundColor:'#ce3d3a'}}/>:null}
      <ScrollableTabView
      initialPage={0}
      scrollWithoutAnimation={true}
      renderTabBar={()=><ScrollableTabBar
                    underlineColor='#ce3d3a'
                    activeTextColor='#fff'
                    inactiveTextColor='rgba(255, 255, 255, 0.7)'
                    underlineHeight={0}
                    textStyle={{ fontSize: 15 }}
                    backgroundColor='#ce3d3a'
                    tabStyle={{paddingBottom: 0,paddingLeft:12,paddingRight:12}}
                   />}
      >
     <View tabLabel='推荐' style={styles.itemLayout}><NewsList navigator={navigator}/></View>
     <View tabLabel='热点' style={styles.itemLayout}><Text >热点板块</Text></View>
     <View tabLabel='视频'  style={styles.itemLayout}><Text >视频板块</Text></View>
     </ScrollableTabView>
     </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  itemLayout:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  },
  text:{
      alignItems:'center'
  }
});
