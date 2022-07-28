import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../Redux'

function CakeNoHooks (props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
      <br/>
      <br/>
      <br/>
      <button onClick={() => props.buyCake(number)}>Buy X Cakes</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeNoHooks)