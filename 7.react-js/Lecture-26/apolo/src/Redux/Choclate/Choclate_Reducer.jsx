import { BUY_CHOCLATE } from "./Choclate_Constant";
import { BUY_REMOVE_CHOCLATE } from "./Choclate_Constant";

const initialState = {
    numberOfChoclate: 10,
    numberOfChoclate1: 10
}

const ChoclateReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CHOCLATE: return {
            ...state,
            numberOfChoclate:state.numberOfChoclate - 1
        }
        case BUY_REMOVE_CHOCLATE: return {
            ...state,
            numberOfChoclate1:state.numberOfChoclate1 + 1
        }
        default: return state;
    }
}

export default ChoclateReducer