import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Effect() {
    const [name, setName] = useState("Diego")
    const [data, setData] = useState(null)
    const [id, setId] = useState(1)

    function change() {
        setName("Andres")
        setId(id + 1)
    }
    useEffect(() => {
        console.log("new name")
        console.log("post con id: " + id)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [id])

    return (
        <div>
            <h2>Effect</h2>
            <p>This is the effect component</p>
            <p>{name}</p>
            <button onClick={() => change()}>change name</button>
            <p>{data ? data.title : ""}</p>
        </div>
    )
}

