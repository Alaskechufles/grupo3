import React, { useEffect, useState } from 'react'
import Post from './Post'

export default function PostList() {
    const [id, setId] = useState(1)
    const [data, setData] = useState(null)

    function next() {
        setId(id + 1)
    }

    function prev() { id === 1 ? setId(1) : setId(id - 1) }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [id])

    return (
        <div>
            <h2>Post List</h2>
            <Post title={data ? data.title : "cargando..."} body={data ? data.body : "cargando..."} />
            <button onClick={() => prev()} className={id === 1 ? 'hidden' : ' border  rounded-xl px-4 py-2 text-white bg-amber-700'} >Anterior</button>
            <button onClick={() => next()} className=' border  rounded-xl px-4 py-2 text-white bg-amber-700'>Siguiente</button>
        </div>
    )
}
