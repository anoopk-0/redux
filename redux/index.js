/*
install redux : yarn add redux.

 3 core concept of redux
    #store : hold the state of the appliction
    #action : describe the changes in the state of the appln
    #reducer : which actually carries out the state transtion depending on the action.

Principles:
    1.the state of the appln is stored in a single object , which is managed by the store.
        ex:
            {
                numberOfCakes : 10
            }

    2.the only to changes the state of the appln is to emit an action , which carry a object like payload decribing what happened.
        ex:
            action = {
                type:'Added'
                someother payload...
            }

        *not allowed to directly update the state of the appl

    3. store is pure reducer:
            are pure function , don't mutuate the origial state , rather return a new state

            reducer(state,action) => return newState


             -- {application is alwasy subscribe to the store}-----------> [application]----------->---
            |                                                                                         | {when appl what to change state , it will dispatch action}
            |                                                                                     [dispatch]
            |                                                                                         |
    [redux -- store]  <------------>   [reducer] <----------------------------------------------------



    middleware:
            is the suggest way to extend redux with extra functionality
            -provides a third party extension point b/w dispatching an action and the moment is reaches the reducer.
            -use middleware for logging , crash reporting , performing asyc task. 
*/

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { createLogger } = require("redux-logger");

const logger = createLogger();

//state
const initialStateCake = {
    numberOfCakes: 10,

}

const initialStateIceCream = {
    numberOfIceCream: 7
}

//Action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//action creator : function that return a action
const buyCake = () => {
    return {
        type: BUY_CAKE,
        //....other payload
    }
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        //....other payload
    }
}



//reducer
const cakeReducer = (state = initialStateCake, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return { ...state, numberOfCakes: state.numberOfCakes - 1 }
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialStateIceCream, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return { ...state, numberOfIceCream: state.numberOfIceCream - 1 }
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})



//store
/**
 * redux store: hold the state of entire application
 *
 * responsiblity :
 *      - hold the state
 *      - allow access to state via getState();
 *      - allow state to be updated vis dispatch(action);
 *      - register listener though subscribe(listener) && it can also be unsubscribe.
 */


const store = createStore(rootReducer, applyMiddleware(logger));

console.log('initial state :', store.getState())

//console.log('updated state :', store.getState())
const unsubscribe = store.subscribe(() => { });

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());

unsubscribe();