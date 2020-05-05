import React from 'react'
import loginService from '../services/loginService'
import {setUsername, setPassword} from '../reducers/loginReducer'
import {useDispatch, useSelector} from 'react-redux'

const Login = () => {
    
    const dispatch = useDispatch()
    let username = useSelector(state => state.login.username)
    let password = useSelector(state => state.login.password)

    const handleULoginChange = (event) => {
        event.preventDefault()
        dispatch(setUsername(event.target.value))
    }

    const handlePLoginChange = (event) => {
        event.preventDefault()
        dispatch(setPassword(event.target.value))
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('handling login now!')
        const response = await loginService.login({username,password})
        

        console.log('Login Request sent')
        console.log(JSON.stringify(response))
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit = {handleLogin}>
                <p>Username: <input type = "text" name = "username" onChange = {handleULoginChange}/></p>
                <p>Password: <input type = "password" name = "password" onChange = {handlePLoginChange} /></p>
                <button type = "submit">Login</button>
            </form>
        </div>
    )
}

export default Login