/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Reducers for actions 
*/
import { ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionTypes';
const movieReducers = (movies = [], action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            console.log('FETCH_MOVIES Reducers')
            return [];
        case FETCH_SUCCEEDED:
            console.log('FETCH_SUCCEEDED Reducers')
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        // case ADD_MOVIE:
        //     return [
        //         ...movies,
        //         action.newMovie
        //     ];
        default:
            return movies; //state does not change
    }
}

export default movieReducers;