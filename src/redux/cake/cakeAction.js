import { BUY_CAKE } from './cakeTypes';

export const buyCake = (amount) => {
    return {
        type: BUY_CAKE,
        payload: amount
    }
}