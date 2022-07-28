import { BUY_CAKE } from "./cakeTypes";
import { FILL_CAKE } from "./cakeTypes";

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}

export const fillCake = (number = 1) => {
    return {
        type: FILL_CAKE,
        payload: number
    }
}



