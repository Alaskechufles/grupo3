import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Effect() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setData(data))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h2>Effect</h2>
            <p>This is the effect component</p>
            <p>{data.map((user) => <p>{user.name}</p>)}</p>
        </div>
    )
}

