import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { buyCake } from '../Redux'

const CakeHook = () => {
    const numOfCakes = useSelector( state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Num of cakes - {numOfCakes}</h1>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default CakeHook
