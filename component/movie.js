import React, { Component } from 'react';
import {
    createStore,
    applyMiddleware
} from 'redux';
import { Provider } from 'react-redux'
import allReducers from '../reducers/index';
import MovieContainer from '../containers/movieContainer';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Saga/rootSaga'

const sagaMiddleware =  createSagaMiddleware();


let store = createStore(allReducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default class Movie extends Component {
    render(){
        return(
            <Provider store={store}>
                 <MovieContainer/>
             </Provider>
        )
    }
  
}

