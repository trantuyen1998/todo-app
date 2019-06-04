import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
    RefreshControl,
    TextInput,
    Image,TouchableOpacity

} from 'react-native'

export default class TaskItemComponent extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>{
                    // call this action in container
                }}
                style={{
                    position:'absolute',
                    top: 0,
                    borderBottomColor: 0,
                    left:0,
                    right:0
                }}
                >

                </TouchableOpacity>
                <Text style={
                    {
                        margin:20,
                        color:this.props.completed == true ? 'darkgreen' : 'black'
                    }
                }>
                    {this.props.taskName}
                </Text>
            </View>
        )
    }
}