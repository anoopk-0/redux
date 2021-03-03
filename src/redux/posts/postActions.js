import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./postActionType"

const requestPosts = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}


const successPosts = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: [...data]
    }
}

const errorPosts = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}


export const getPosts = () => {
    //thunk : return a function , rather then a action object , spacility is that it can be impure.
    return async function (dispatch) {

        dispatch(requestPosts())

        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/user')
            dispatch(successPosts(data))

        } catch (error) {
            dispatch(errorPosts(error.message))
        }
    }
}