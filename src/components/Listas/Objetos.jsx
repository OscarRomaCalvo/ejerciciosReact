import { useState } from "react";

const defaultUser = {
    username: "",
    email: "",
    role: "GUEST"
}

function Objetos(){
    const [user, setUser] = useState({...defaultUser})

    function handleLogin(){
        setUser(user => {
            const copyUser = {...user}
            copyUser.username="Nuevo usuario"
            copyUser.email="nuevo@usuario.com"
            copyUser.role="ADMIN"
            return copyUser
        })
    }

    function handleLogout(){
        setUser(defaultUser)
    }

    return (
        <div>
            <h4>{user.role}</h4>
            <p>{user.username} {user.email}</p>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>LoginOut</button>

        </div>
    )
}

export default Objetos