import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .finally(() => setLoading(false))
    }, [])

    return {
        data, loading
    }
}
