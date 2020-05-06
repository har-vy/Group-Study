import React from 'react'
import registerService from '../../services/registerService'
import { useDispatch, useSelector } from 'react-redux'
import { setUsername, setPassword, setEmail, setName } from '../../reducers/registerReducer'
import styles from '../../styles/styles.module.css'

const Register = () => {

    const dispatch = useDispatch()
    const username = useSelector(state => state.register.username)
    const password = useSelector(state => state.register.password)
    const email = useSelector(state => state.register.email)
    const name = useSelector(state => state.register.name)

    const handleRegistration = async (event) => {
        event.preventDefault()
        console.log('Handling Registration Now!')
        const userObject = {
            name: name,
            email: email,
            username: username,
            password: password
        }

        await registerService.register(userObject)
        console.log('Registration successful')
    }


    const handleURegisterChange = (event) => {
        event.preventDefault()
        dispatch(setUsername(event.target.value))
    }

    const handlePRegisterChange = (event) => {
        event.preventDefault()
        dispatch(setPassword(event.target.value))
    }

    const handleNameChange = (event) => {
        event.preventDefault();
        dispatch(setName(event.target.value))
    }

    const handleEmailChange = (event) => {
        event.preventDefault()
        dispatch(setEmail(event.target.value))
    }

    return (
        <div className= {styles.formHeader}>
            <h1>Register</h1>
            <form onSubmit={handleRegistration} className = {styles.form}>
                <div className = {styles.formRow}>
                    <label for="name">Name</label>
                    <input id="name" type = "text" name="name" onChange={handleNameChange} />
                </div>
                <div className = {styles.formRow}>
                    <label for="email">Email</label>
                    <input id="email" name="email" type="email" onChange={handleEmailChange} />
                </div>
                <div className = {styles.formRow}>
                    <label for="username">Username</label>
                    <input id="username" type = "text" name="username" onChange={handleURegisterChange} />
                </div>
                <div className = {styles.formRow}>
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" onChange={handlePRegisterChange} />
                </div>
                <div className = {styles.formRow}>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register