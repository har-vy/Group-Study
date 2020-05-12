import React from 'react'
import loginService from '../../services/loginService'
import { setUsername, setPassword , redirect} from '../../reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../styles/styles.module.css'
import { setName, setToken } from '../../reducers/userReducer'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const localStorage = window.localStorage
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

        if (response.status === 200) {
            console.log('Login Request sent')
            dispatch(redirect())
            dispatch(setName(response.data.name))
            dispatch(setToken(response.data.token))
            localStorage.setItem('loggedInUser', response.data.token)
            localStorage.setItem(response.data.token, response.data.username)
            console.log(JSON.stringify(response.data))
            history.push(`/user/${username}`)
        }
    }
    return (
        <div className={styles.formHeader}>
            <h1>Login</h1>
            <form onSubmit={handleLogin} className={styles.form}>
                <div className={styles.formRow}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" name="username" onChange={handleULoginChange} />
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" onChange={handlePLoginChange} />
                </div>   
                <div className={styles.formRow}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login