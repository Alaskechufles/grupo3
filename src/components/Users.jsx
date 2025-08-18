import React from 'react'
import useFetch from '../hooks/useFetch'

export default function Users() {
    const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users")

    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            {data.map(user => <p>{user.name}</p>)}
        </div>
    )
}
