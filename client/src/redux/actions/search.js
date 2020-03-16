// import axios from 'axios';
import { SEARCH_MOVIE } from '../constants';

const searchMovies = (inputValue) => ({
  type: SEARCH_MOVIE,
  inputValue,
});


export const moviesSearcher = (inputValue) => dispatch =>{
    dispatch(searchMovies(inputValue))
}


