/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Send GET / POST api requests to server
*/
const urlGetMovies = 'http://10.14.37.171:8000/getAllPubkey';
const urlPostMovies = 'http://10.14.37.171:8000/register';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    console.log("response: ", response)
    const movies = yield response.status === 200 ? JSON.parse(response._bodyText): []       
    return movies;
}

//send POST request to add new Movie
function* insertNewMovieFromApi(newMovie) {
    const response = yield fetch(urlPostMovies, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pubkey: '025d2a80def068e4e22203dd8c9fbca471fdb14562ec5931b9f44b6a13c710412c',
            dname: 'yyyyyyyyyyyyyyyy',
        }),
    });
    console.log('addres: ', response)
    yield console.log(`response = ${JSON.stringify(response)}`); 
    return yield (response.status === 200);//true or false
}

export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi
}; 