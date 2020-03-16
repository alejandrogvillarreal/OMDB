import { SEARCH_MOVIE } from '../constants';

const initialState = {
    inputValue: '',
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SEARCH_MOVIE:
            return Object.assign({}, state, { inputValue: action.inputValue });

        default:
            return state;
    }
}