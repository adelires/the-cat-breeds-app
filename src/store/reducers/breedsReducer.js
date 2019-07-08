import { SEARCH_BREEDS, SHOW_MORE_BREEDS, TOGGLE_BREEDS_LOADER } from "../actions/breedsAction";

const initialState = {
    breeds: [],
    search: '',
    found: false,
    searched: false,
    showing: 5,
    loading: false
};

const breedsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BREEDS:
            state = {
                ...state,
                ...action.payload,
                found: action.payload.breeds.length > 0,
                searched: true,
                showing: 5
            }
            break;
        case SHOW_MORE_BREEDS:
            const { breeds, showing } = state;
            state = {
                ...state,
                showing: breeds.length > showing ? showing + 5 : showing
            }
            break;
        case TOGGLE_BREEDS_LOADER:
            state = {
                ...state,
                loading: action.loading
            }
            break;
        default:
            break;
    }
    return state;
}

export default breedsReducer;