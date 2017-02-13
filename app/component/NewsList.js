/**
 * Created by zhulizhe on 2017/1/21.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    PixelRatio,
    RefreshControl,
    Navigator,
    InteractionManager
} from 'react-native';

import SearchBar from './SearchBar'
import HomeDetail from '../container/HomeDetail'
var REQUEST_URL = 'https://api.douban.com/v2/movie/in_theaters';
let _pageNo = 1
const _pageSize = 30

export default class NewsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
        this.fetchData = this.fetchData.bind(this);
        this.push = this._push.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
    }

    componentDidMount() {
        const {navigator} = this.props;
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.subjects),
                    loaded: true,
                });
            });
    }

    _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
            <View key={`{sectionID}-${rowID}`}
                  style={{height: PixelRatio.get()}}>
            </View>
        );
    }

    render(){
        if(!this.state.loaded){
            return  this.renderLoadingView()
        }
        return (<View style={styles.container}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie.bind(this)}
                style={styles.listView}
                renderHeader={ () => {
						return <SearchBar style={styles.searchBar}/>
				} }
                renderSeparator={this._renderSeparator}
                onEndReached={this.loadMoreData.bind(this)}
                enableEmptySections={true}
                onEndReachedThreshold={10}
                refreshControl={
						<RefreshControl
						    refreshing={false}
							onRefresh={ this._onRefresh }
							tintColor="gray"
							colors={['#ff0000', '#00ff00', '#0000ff']}
							progressBackgroundColor="gray"/>
						}/>
        </View>);
    }

    _onRefresh(){
        alert('xxx')
    }

    loadMoreData(){

    }

    _goDetail(){
        const {navigator} = this.props
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: HomeDetail,
                passProps: {navigator: navigator}
            });
        });
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Image
                    source={require('../images/timg.gif')}
                    style={{height: 60,width: 60}}
                />
            </View>
        );
    }

    renderMovie(news) {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={this._goDetail.bind(this)}
            >
                <View style={styles.container}>
                    <Image
                        source={{uri: news.images.small}}
                        style={styles.small}
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{news.title}</Text>
                        <Text style={styles.originaltitle}>{news.original_title}</Text>
                        <Text style={styles.introduce}>{"评分：" + news.rating.average}</Text>
                        <Text style={styles.introduce}>{"类型：" + news.genres}</Text>
                        <Text style={styles.introduce}>{"导演：" + news.directors[0].name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    _push(news) {
        this.props.navigator.push({
            // id: 'Movie_details',
            component: HomeDetail,
            sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
        });
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 7,
        textAlign: 'left',
    },
    originaltitle: {
        fontSize: 13,
        fontStyle: 'italic',
        marginTop: 2,
        marginLeft: 7,
        marginBottom: 4,
    },
    introduce: {
        marginLeft: 7,
        textAlign: 'left',
    },
    small: {
        margin: 7,
        marginLeft: 13,
        width: 64,
        height: 103,
    },
    listView: {
        backgroundColor: '#FFFFFF',
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    searchBar: {
        backgroundColor: 'yellow',
        height: 40,
        flexDirection: 'row'
    }
});