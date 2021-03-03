import { initialState } from './cakeInitialState';
import { BUY_CAKE } from './cakeTypes';

export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return { ...state, numberOfCake: state.numberOfCake - action.payload }

        default:
            return state;
    }
}