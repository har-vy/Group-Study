import React from 'react'
import registerService from '../services/registerService'
import { useDispatch, useSelector } from 'react-redux'
import { setUsername, setPassword, setEmail, setName } from '../reducers/registerReducer'

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
         name : name,
         email: email,
         username: username,
         password: password
        }
    
        const response = await registerService.register(userObject)
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

    return(
        <div>
            <h1>Register</h1>
            <form onSubmit = {handleRegistration}>
                <p>Name: <input name = "name"  onChange = {handleNameChange}/></p>
                <p>Email: <input name = "email" type = "email" onChange = {handleEmailChange}/></p>
                <p>Username: <input name = "username" onChange = {handleURegisterChange}/></p>
                <p>Password: <input name = "password" type = "password" onChange = {handlePRegisterChange}/></p>
                <button type = "submit">Register</button> 
            </form>
        </div>
    )
}

export default Register