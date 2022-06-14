import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incrementHandler = () => {
        dispatch({
            type: 'increment'
        })
    }

    const deccrementHandler = () => {
        dispatch({
            type: 'decrement'
        })
    }

    const increaseHandler = () => {
        dispatch({
            type: 'increase',
            amount: 5
        })
    }

    const decreaseHandler = () => {
        dispatch({
            type: 'decrease',
            amount: 5
        })
    }

    const toggleHandler = () => { }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}> Increment 5</button>
            <button onClick={decreaseHandler}> Deccrement 5</button>
            <button onClick={deccrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleHandler}> Toggle Counter</button>
        </main>
    )
}

export default Counter;