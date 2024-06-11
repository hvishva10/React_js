import React from 'react'
import { buy_cack} from '../Redux/Index'
// import { connect } from 'react-redux'
import { useSelector , useDispatch } from 'react-redux'

const CackContainer = (props) => {

  const numOfCakes = useSelector(state => state.cack.numOfCake)

  const dispatch = useDispatch()

  return (
    <div >
      <h1 className='font-bold text-2xl'>Num of Cakes : {numOfCakes}</h1>
      <button className='btn' onClick={() => dispatch(buy_cack())}>Decrement</button>
    </div>
  )
} 

// const mapStateToProps = state =>{
//   return{
//     numOfCake:state.numOfCake,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return{
//     buy_cack:() => dispatch(buy_cack()),
//   }
// }

export default CackContainer
