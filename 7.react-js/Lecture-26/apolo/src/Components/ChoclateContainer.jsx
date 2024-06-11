import React from 'react'
import { buy_choclate } from '../Redux/index2'
import { connect } from 'react-redux'
import { buy_remove_choclate } from '../Redux/index2'

const ChoclateContaine = (props) => {
  return (
    <div >
      <h1 className='font-bold text-2xl'>Num of Choclate : {props.numberOfChoclate}</h1>
      <button className='btn' onClick={props.buy_choclate}> Decrement</button>
      <h1 className='font-bold text-2xl'>Num of Choclate : {props.numberOfChoclate1}</h1>
      <button className='btn' onClick={props.buy_remove_choclate}>increment</button>
    </div>
  )
}

const mapStateToProps = state =>{
  return{                                                                                                                                                                 
    numberOfChoclate:state.numberOfChoclate,
    numberOfChoclate1:state.numberOfChoclate1
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buy_choclate:() => dispatch(buy_choclate()),
    buy_remove_choclate:() => dispatch(buy_remove_choclate())
  }
}

export default connect(mapStateToProps , mapDispatchToProps) (ChoclateContaine)
