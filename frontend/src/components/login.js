import React from 'react'
import loginService from '../services/loginService'
import { setUsername, setPassword } from '../reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import '../styles.css'

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
        const response = await loginService.login({ username, password })


        console.log('Login Request sent')
        console.log(JSON.stringify(response))
    }

    return (
        <div className="form-header">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="form">
                <div className="form-row">
                    <label for="username">Username</label>
                    <input id="username" type="text" name="username" onChange={handleULoginChange} />
                </div>
                <div className="form-row">
                    <label for="password">Password</label>
                    <input id="password" type="password" name="password" onChange={handlePLoginChange} />
                </div>
                <div className="form-row">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login