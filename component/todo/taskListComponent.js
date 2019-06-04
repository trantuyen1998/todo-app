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

import TaskItemContainer from '../../containers/taskItemContainer'

export default class TaskListComponent extends Component{
    render() {
        return (
             <FlatList 
             data ={this.props.tasks}
             renderItem={({item,index})=>{
                 return(
                     <TaskItemContainer {...item}>

                     </TaskItemContainer>
                 )
             }}
             >

             </FlatList>
        );
    }
}