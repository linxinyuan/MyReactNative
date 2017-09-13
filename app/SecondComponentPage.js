/**
 * Author : Venco
 * Time : 2017/9/13
 * FLAG : I have no bug!
 */

import React, {Component} from 'react';
import {
    Button
} from 'react-native'

export default class Second extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        this._Press = this._Press.bind(this);
    }

    _Press() {
        const {navigator} = this.props;

        //alert(this.props.id);

        this.props.back('----linxinyuan');

        // if (navigator)
        // {
        //     navigator.pop();
        // }
    }

    render() {
        return (<Button title="second" onPress={this._Press}/>);
    }
}