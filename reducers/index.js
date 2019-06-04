import { combineReducers } from 'redux'
import taskReducers from './taskReducers';
import counterReducers from './counterReducer'
import movieReducers from './movieReducers'
const allReducers = combineReducers({
    // taskReducers,
    // add nhieu reducers
    // counterReducers
    movieReducers

})

export default allReducers;