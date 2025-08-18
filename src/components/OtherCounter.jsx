import React from 'react'
import useCounter from '../hooks/useCounter'

export default function OtherCounter() {
    const { count, increment, decrement } = useCounter(5)
    return (
        <div>
            <h2>counter</h2>
            <button onClick={() => increment()}>Aumentar</button>
            <button onClick={() => decrement()}>Disminuir</button>
            <p>{count}</p>
        </div>
    )
}
