import {BUY_CAKE, FILL_CAKE} from './cakeTypes'

const initialState = {
    numOfCakes : 10
}

// Reducer

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes : state.numOfCakes - action.payload
            }
        case FILL_CAKE:
            return{
                ...state,
                numOfCakes : state.numOfCakes + action.payload
            }
            default: return state
        }
}

export default cakeReducer;