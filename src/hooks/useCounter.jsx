import React, { useState } from 'react'

export default function useCounter(ini = 0) {
    const [count, setCount] = useState(ini)
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    return { count, increment, decrement }
}
