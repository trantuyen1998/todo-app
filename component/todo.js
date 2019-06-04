import React, { Component } from 'react';
import {
    createStore
} from 'redux';
import { Provider } from 'react-redux'
import allReducers from '../reducers/index';
import TaskManagerComponent from './todo/taskManagerComponent'

let store = createStore(allReducers);

export default class Todo extends Component {
    render(){
        return(
            <Provider store={store}>
                 <TaskManagerComponent/>
             </Provider>
        )
    }
  
}

