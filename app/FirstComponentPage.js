/**
 * Author : Venco
 * Time : 2017/9/13
 * FLAG : I have no bug!
 */

import React, {Component} from 'react';
import {
    Button
} from 'react-native'
import Second from "./SecondComponentPage";

const name = 'linxinyuan';

export default class FirstComponentPage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        this._BtnOnPress = this._BtnOnPress.bind(this);
        this._showCallBackMsg = this._showCallBackMsg.bind(this);
    }

    _showCallBackMsg(callbackMsg){
        console.log("venco---callback" + callbackMsg);
    }

    _BtnOnPress() {
        const {navigator} = this.props;

        if (navigator) {
            navigator.push({
                name: Second,
                component: Second,
                params: {
                    id: 10086,
                    back: (callbackMsg) => this._showCallBackMsg(callbackMsg)
                }
            });
        }
    }

    render() {
        return (
            <Button title="to second" onPress={() => {
                this._BtnOnPress()
            }}/>
        );
    }
}

global.name = name;