import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from './postActionType';
import { initialStatePosts } from './postInitialState';

const postReducer = (state = initialStatePosts, action) => {

    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true }

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                data: [...action.payload],
                error: '',
                loading: false
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                data: [],
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default postReducer;