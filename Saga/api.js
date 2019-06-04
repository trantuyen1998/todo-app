

const urlGetMovies = 'https://facebook.github.io/react-native/movies.json';
const urlPostMovies = 'https://facebook.github.io/react-native/movies.json';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const responseJson = yield response.status === 200 ? JSON.parse(response._bodyInit): []      
    // console.log(responseJson.movies) 
    return responseJson.movies;
}
function* insertNewMoviesFromApi(newMovie) {
    const response = yield fetch(urlPostMovies, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title:newMovie.title,
            releaseYear: newMovie.releaseYear
        }),
    });
    // console.log(response.movies)
    return yield(response.movies.status === 201) 
  
}
export const Api = {
    getMoviesFromApi,
    insertNewMoviesFromApi
}; 