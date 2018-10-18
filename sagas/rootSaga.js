/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
rootSaga => to manage other sagas
*/
//Saga effects
import { fork } from 'redux-saga/effects';

import {sayHello} from './movieSagas';
import {sayHello1} from './movieSagas';
import { watchFetchMovies } from './movieSagas';
//Add movie
import { watchAddNewMovie } from './movieSagas';

export default function* rootSaga() {
    yield [
        fork(sayHello1),
        fork( sayHello),
        fork(watchFetchMovies),
        fork(watchAddNewMovie),
    ];
}