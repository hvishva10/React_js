import CackReducer from '../Redux/Cack/CackReducer'
import ChocoReducer from '../Redux/Choco/ChocoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    cack: CackReducer,
    choco: ChocoReducer
})

export default rootReducer