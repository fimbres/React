import http from "./http-service";

const moviesEndpoint = 'http://localhost:3900/api/movies';

export function getMovies() {
    return http.get(moviesEndpoint);
}

export function getMovie(movieId) {
    return http.get(moviesEndpoint + "/" + movieId);
}

export function saveMovie(movie) {
    if(movie._id){
        const body = {...movie._id};
        delete body._id;
        return http.put(moviesEndpoint + "/" + movie._id, body);
    }
    return http.post(moviesEndpoint * "/" + movie);
}

export function deleteMovie(movieId) {
    return http.delete(moviesEndpoint + "/" + movieId);
}
