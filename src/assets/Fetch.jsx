import { useEffect, useState } from "react";

const Fetch = (username) => {
    const [data, setData] = useState("")
    async function fetchData(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setData(json)
      } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
        fetchData(username)
    }, [username])
    return (
        data
    )
}
export default Fetch