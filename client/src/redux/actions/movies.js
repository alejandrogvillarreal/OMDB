import axios from 'axios';
import { RECEIVE_MOVIES, RECEIVE_MOVIE, RECEIVE_HARDCODED_MOVIES } from '../constants';

const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

export const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie,
});

const receiveHardcodedMovies = (hardcodedMovies) => ({
  type: RECEIVE_HARDCODED_MOVIES,
  hardcodedMovies,
});

export const fetchMovies = (movies = "") => dispatch =>
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${movies}`)
    .then(res => res.data)
    .then(movies => {
      dispatch(receiveMovies(movies))
    });

export const fetchMovie = movieId => dispatch =>
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${movieId}`)
    .then(res => res.data)
    .then(movie => {
      dispatch(receiveMovie(movie));
    })

export const fetchHardcodedMovies = (movies = 'star wars') => dispatch =>
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${movies}`)
    .then(res => res.data)
    .then(movies => {
      dispatch(receiveHardcodedMovies(movies))
    });