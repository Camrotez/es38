import Fetch from "./Fetch"
function UserGit({ username }) {
    const data = Fetch(username)
    console.log(data)
    return (

        <h1>{data.name}</h1>
    )
}
export default UserGit