import React from 'react';

import classes from './Counter.module.css';

const Counter = () => {

    const toggleHandler = () =>{}
    
    return (
        <>
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}> --- COUNTER VALUE ---</div>
                <button onClick={toggleHandler}> Toggle Counter</button>
            </main>
        </>
    )
}

export default Counter;