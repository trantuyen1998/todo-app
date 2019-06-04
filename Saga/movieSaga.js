import { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './api';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();   
        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}

function* addNewMovie(action){
    try{
        const result = yield Api.insertNewMoviesFromApi(action.newMovie)
        if(result === true){
            yield put({type: FETCH_MOVIES,sort:'desc'})
        }
    }catch(error){

    }
}
export function* watchAddNewMovie(){
    yield takeLatest(ADD_MOVIE,addNewMovie)
}