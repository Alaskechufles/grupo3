import React from 'react'
import useFetch from '../hooks/useFetch'

export default function PostList2() {
    const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts")

    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            {data.map(post => <p>{post.title}</p>)}
        </div>
    )
}
