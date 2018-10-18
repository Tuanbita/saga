/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Create some sagas for FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED
*/
import { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE } from '../actions/actionTypes';
import {fetchSuccessAction} from '../actions'
//Saga effects
import { put, takeLatest ,takeEvery} from 'redux-saga/effects';
import { Api } from './Api';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();   
        yield put(fetchSuccessAction(receivedMovies));     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}

export function* watchFetchMovies() { 
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}

//Add new movie
//dau vao la 1 action,
function* addNewMovie(action) {            
    try {
        const result = yield Api.insertNewMovieFromApi(action.newMovie);
        if (result === true) {
            yield put({ type: FETCH_MOVIES});     
        }
    } catch (error) {        
        //do nothing
    }
}

export function* watchAddNewMovie() {            
    yield takeLatest(ADD_MOVIE, addNewMovie);
}

export function* sayHello() {
    console.log('Hello world !');
}

export function* sayHello1() {
    console.log('Hello world !');
}
