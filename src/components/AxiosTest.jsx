import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AxiosTest() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        try {
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then(res => setUsers(res.data))
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <div>
            <h2>AxiosTest</h2>
            {users.length > 0 ?
                users.map(user => <p key={user.id}>{user.name}</p>) : <p>Cargando...</p>
            }
        </div>
    )
}
