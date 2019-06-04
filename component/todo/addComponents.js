import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
    RefreshControl,
    TextInput,
    Image

} from 'react-native'

import { addNewTask} from '../../actions/index';

export default class AddComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            newTaskName:''
        }

    }
    render(){
        return(
            <View style={{
                backgroundColor:'tomato',
                flexDirection:'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height:64
            }}>
            <TextInput
                style={{
                    height:40,
                    width:200,
                    margin:10,
                    padding:10,
                    borderColor:'white',
                    color:'white',
                }}
                keyboardType="default"
                placeholderTextColor="white"
                placeholder = 'Enter task name'
                autoCapitalize='none'
                onChangeText={
                    (text)=>{
                        this.setState({newTaskName:text})
                    }
                }

            />
            <TouchableHighlight style={{
                marginRight:10
            }}
            underlayColor='blue'
            onPress={(event)=>{
                if(!this.state.newTaskName.trim()){
                    return;
                }
                //call click event =>use "container"
                this.props.onClickAdd(this.state.newTaskName)
            }}
            >
            <Image
               style={{width:35,height:35}}
               source={require('../icons/Logo.png')}
            />

            </TouchableHighlight>
            </View>
        )
    }
}