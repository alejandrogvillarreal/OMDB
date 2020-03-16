import { RECEIVE_MOVIES, RECEIVE_MOVIE, RECEIVE_HARDCODED_MOVIES } from '../constants';

const initialState = {
    list: [],
    hardcodedMovies: [],
    selected: null,
}

export default (state = initialState, action) => {
    switch (action.type) {

        case RECEIVE_MOVIES:
            return Object.assign({}, state, { list: action.movies.Search });

        case RECEIVE_MOVIE:
            return Object.assign({}, state, { selected: action.movie });

        case RECEIVE_HARDCODED_MOVIES:
            return Object.assign({}, state, { hardcodedMovies: action.hardcodedMovies.Search });

        default:
            return state;
    }
}