import { BUY_CACK } from "./CackConstant";
import { BUY_REMOVE_CACK } from "./CackConstant";

const initialState = {
    numOfCake: 10,
    numberOfCakes1: 10
}

const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CACK: return {
            ...state,
            numOfCake:state.numOfCake - 1
        }
        case BUY_REMOVE_CACK: return {
            ...state,
            numberOfCakes1:state.numberOfCakes1 + 1
        }
        default: return state;
    }
}

export default CakeReducer