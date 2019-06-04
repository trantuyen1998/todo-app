import { INCREMENT,DECREMENT} from '../actions/actionTypes'

import { delay } from 'redux-saga'
import { put , takeEvery } from 'redux-saga/effects'
// takeEvery theo doi 1 action thay doi thi goi saga
export function* sayHello(){
    console.log('hello')
}
function* increment(){
    console.log('this is increment')
}
export function* watchIncrement(){
    yield takeEvery(INCREMENT,increment)
}

function* decrement(){
    console.log('this is decrement')
}
export function* watchDecrement(){
    console.log('watch decrement saga');
    yield takeEvery(DECREMENT,decrement)
}