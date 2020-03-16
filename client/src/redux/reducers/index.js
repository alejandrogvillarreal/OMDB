import { combineReducers } from 'redux';
import moviesReducer from './movies-reducer';
import searchReducer from './search-reducer';

export default combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});