import { 
    ADD_NEW_TASK,
    TOGGLE_NEW_TASK, 
    INCREMENT,
    DECREMENT,
    ADD_MOVIE, 
    FETCH_MOVIES, 
    FETCH_SUCCEEDED, 
    FETCH_FAILED
} from './actionTypes'

let newTaskId = 0;
export const addNewTask = ( inputTaskName  )=>{
    return{
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: inputTaskName
    }
}

export const toggleTask = ( taskId )=>{
    return{
        type: TOGGLE_NEW_TASK,
        taskId: taskId++,
    }
}
// redux-saga

//Action: "increase counter "
export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
}
//Action: "decrease counter "
export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
}
// redux saga fetch
export const fetchMoviesAction = (sort) => {
    return {
        type: FETCH_MOVIES,
        sort
    }
}

export const addMovieAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        //newMovie: newMovie
        newMovie
    }
}
//Action sent by Redux-saga
export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}
