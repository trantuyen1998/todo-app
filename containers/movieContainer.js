import { connect } from 'react-redux';
import MovieComponent from '../component/movie/movieComponent';

//Actions ?
import { addMovieAction, fetchMoviesAction, fetchSuccessAction, fetchFailedAction } from '../actions';

const mapStateToProps = (state) => {        
    return {        
        movies: state.movieReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchMovies: () => {                        
            dispatch(fetchMoviesAction());
        }, 
        //Not necessary !   
        // onSuccessFetch: () => {                        
        //     dispatch(fetchSuccessAction());
        // }, 
        onAddMovie: (newMovie) => {                        
            dispatch(addMovieAction(newMovie));
        }
    };
}
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;