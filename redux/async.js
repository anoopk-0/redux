/*
state = {
    data:[],
    loading: true,
    error:''
}


action type

FETCH_USER_REQUEST
FETCH_USER_SUCCESS
FETCH_USER_FAILURE
*/

const { createStore, applyMiddleware } = require("redux");
const { createLogger } = require("redux-logger");
const thunkMiddleware = require("redux-thunk").default

const axios = require('axios').default

const logger = createLogger();

const initialState = {
    data: [],
    error: '',
    loading: true
}

//action type
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

//action creator

const requestData = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}


const fetchData = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: [...data]
    }
}

const requestFailed = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
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
                error: payload.error,
                loading: false
            }

        default:
            return state
    }
}

//redux thunk  : define 'async action creator'.it is a middleware.


const fetchUser = () => {
    //thunk : return a function , rather then a action object , spacility is that it can be impure.
    return async function (dispatch) {

        dispatch(requestData())

        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(fetchData(data))

        } catch (error) {
            dispatch(requestFailed(error.message))
        }
    }
}

const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware))
const unsubscribe = store.subscribe(() => { });

store.dispatch(fetchUser())


unsubscribe();
