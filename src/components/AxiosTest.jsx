import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AxiosTest() {
    const [users, setUsers] = useState([])
    const [message, setMessage] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                setUsers(response.data)
                if (response.status === 200) {
                    setMessage("Datos traidos con éxito")
                }
            } catch (error) {
                if (error.status === 404) {
                    setMessage("no se encontraron datos" + " - " + error.message)
                }
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h2>AxiosTest</h2>
            {message}
            {users.length > 0 ?
                users.map(user => <p key={user.id}>{user.name}</p>) : <p>Cargando...</p>
            }
        </div>
    )
}
