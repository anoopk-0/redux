import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { cakeReducer } from "./cake/cakeReducer";
import postReducer from './posts/postReducer';



const rootReducer = combineReducers({
    cake: cakeReducer,
    posts: postReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;