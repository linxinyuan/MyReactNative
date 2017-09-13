/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
    DrawerLayoutAndroid,
    FlatList,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import First from './app/FirstComponentPage'
import getGlobal from 'system.global'

export default class MyReactNative extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
    }

    componentWillMount() {
        //console.log("React native componentWillMount");
        const global = getGlobal();
        console.log(global.name);
    }

    render() {
        console.log("React native render");

        return(
            <Navigator
                initialRoute={{name:First, component:First}}
                configureScene={(route) => {return Navigator.SceneConfigs.VerticalDownSwipeJump}}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            />
        );
    }

    componentDidMount() {
        console.log("React native componentDidMount");
    }

    componentWillReceiveProps() {
        console.log("React native componentWillReceiveProps");
    }

    componentDidUpdate() {
        console.log("React native componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("React native componentWillUnmount");
    }

    //更新state拦截器
    shouldComponentUpdate() {
        console.log("React native shouldComponentUpdate");
        return true;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('MyReactNative', () => MyReactNative);
