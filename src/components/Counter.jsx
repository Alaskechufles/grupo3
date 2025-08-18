
import useCounter from '../hooks/useCounter'

export default function Counter() {
    const { count, increment, decrement } = useCounter(0)
    return (
        <div>
            <h2>counter</h2>
            <button onClick={() => increment()}>Aumentar</button>
            <button onClick={() => decrement()}>Disminuir</button>
            <p>{count}</p>
        </div>
    )
}
