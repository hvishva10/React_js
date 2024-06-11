import { BUY_CHOCLATE } from "./Choclate_Constant"
import { BUY_REMOVE_CHOCLATE } from "./Choclate_Constant"

export function buy_choclate(){
    return{
        type:BUY_CHOCLATE,
    }
}

export function buy_remove_choclate(){
    return{
        type:BUY_REMOVE_CHOCLATE
    }
}