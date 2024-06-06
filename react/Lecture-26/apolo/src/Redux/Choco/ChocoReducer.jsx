import { BUY_CHOCO } from "./ChocoConstant";

const initialState = {
    numOfChoco: 10,
}

const ChocoReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CHOCO: return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        default: return state;
    }
}

export default ChocoReducer