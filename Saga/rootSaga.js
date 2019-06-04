import { delay } from 'redux-saga';
import { call,all,fork } from  'redux-saga/effects';

import { sayHello } from  './counterSagas'
import { watchDecrement,watchIncrement } from './counterSagas'
import { watchFetchMovies } from './movieSaga'
import { watchAddNewMovie } from './movieSaga'

export default function* rootSaga(){
   // chay tuan tu su dung yield
   // yield all([
   //    sayHello,
   //    watchIncrement,
   //    watchDecrement
   // ]) 
   // fork bat dong bo chay
   yield [
      fork(watchFetchMovies),
      fork(watchAddNewMovie)
   ]


}