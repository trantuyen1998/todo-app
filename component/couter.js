import React, { Component } from 'react';
import {
    createStore,
    applyMiddleware
} from 'redux';
import { Provider } from 'react-redux'
import allReducers from '../reducers/index';
import CounterContainer from '../containers/counterContainer'

// redux Saga

import createSagaMiddleware from 'redux-saga'
// middleware
const sagaMiddleware = createSagaMiddleware();
import rootSaga from '../Saga/rootSaga'
let store = createStore(allReducers,applyMiddleware(sagaMiddleware));

export default class Todo extends Component {
    render(){
        return(
            <Provider store={store}>
                <CounterContainer/>
             </Provider>
        )
    }
  
}

sagaMiddleware.run(rootSaga);
