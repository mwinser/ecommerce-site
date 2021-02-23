import React, {useContext, useState} from "react"
import {Context} from "../Context"
import {useHistory} from "react-router-dom"

function Login () {
    const {user, loginUser, logoutUser} = useContext(Context)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory()

    function userNameChange (e) {
        setUserName(e.target.value)
    }

    function passwordChange (e) {
        setPassword("*".repeat(e.target.value.length))
    }
    return(
    <div>
        
        <div className="auth-box">
        <h1>{user ? `${user}, are you sure you want to logout?` : "Login"}</h1>
            {user ? (<button onClick={()=>logoutUser()}>Logout</button>) :
            (
            <form>
                <label>
                    Username: 
                    <input type="text" value={userName} onChange={userNameChange} placeholder="any username works"></input>
                </label>
                <label>
                    Password:
                    <input type="text" value={password} onChange={passwordChange} placeholder="any password works"></input>
                </label>
                <button type="button" onClick={(e)=>{
                    e.target.disabled = true
                    setTimeout(()=>{
                        loginUser(userName)
                        setUserName("")
                        setPassword("")
                        history.push("/")
                    }, 1000)
                    }}>
                Login
                </button>
            </form>
            )}
        </div>
    </div>)
}

export default Login