import React, {useState} from "react";
import {useDispatch} from "react-redux";

const Counter = () => {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

    const reset = () => {
        const newCount = setCount(0)
        dispatch({
            type: 'RESET',
            payload: newCount
        })
    }

    const plusOne = () => {
        const newCount = setCount(count +1)
        dispatch({
            type: 'PLUS_ONE',
            payload: newCount
        });
    }


    const plusTen = () => {
        const newCount = setCount(count +10)
        dispatch({
            type: 'PLUS_TEN',
            payload: newCount
        })
    }

    const minusOne = () => {
        if (count > 0) {
            const newCount = setCount(count -1)
            dispatch({
                type: 'MINUS_ONE',
                payload: newCount
            })
        }
    }

    const minusTen = () => {
        if(count >= 10) {
            const newCount = setCount(count -10)
            dispatch({
                type: 'MINUS_TEN',
                payload: newCount
            })
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={plusTen}>+10</button>
            <button onClick={minusTen}>-10</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter;