import { BUY_CACK} from "./CackConstant";
import { BUY_REMOVE_CACK } from "./CackConstant";

export function buy_cack(){
    return{
        type:BUY_CACK,
    }
}

export function buy_remove_cack(){
    return{
        type:BUY_REMOVE_CACK
    }
}