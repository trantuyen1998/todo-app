import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
    RefreshControl,
    TextInput,
    Image,
    FlatList

} from 'react-native'


import AddContainer from '../../containers/addContainer';
import TaskListContainer from '../../containers/taskListContainer'

export default class TaskManagerComponent extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <AddContainer/>
                <TaskListContainer/>
            </View>
        )
    }
}