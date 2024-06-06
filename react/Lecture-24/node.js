const redux = require('redux')
const createStore = redux.createStore

/* constant */

const BUY_ICECREAME = 'BUY_ICECREAME'
const BUY_CHOCLATE = 'BUY_CHOCLATE'
const BUY_PASTRY = 'BUY_PASTRY'

function buy_icecreame(){
    return{
        type:BUY_ICECREAME,
        info:'First Redux Action'
    }
}

function buy_choclate(){
    return{
        type:BUY_CHOCLATE,
        info:'Secound Redux Action'
    }
}

function buy_pastry(){
    return{
        type:BUY_PASTRY,
        info:'Thired Redux Action'
    }
}

const initialState = {
    numOfIcecreame: 20,
    numOfChoclate: 20,
    numOfPastry: 20
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_ICECREAME: return {...state , numOfIcecreame:state.numOfIcecreame - 1}
        default: return state

        case BUY_CHOCLATE: return {...state , numOfChoclate:state.numOfChoclate -1}
        case BUY_PASTRY: return {...state , numOfPastry:state.numOfPastry -1}
    }
}

const store = createStore(reducer)

console.log('Initial Store' , store.getState());

store.subscribe(() => console.log('Updated State' , store.getState()))

store.dispatch(buy_icecreame())
store.dispatch(buy_choclate())
store.dispatch(buy_pastry())
store.dispatch(buy_pastry())
