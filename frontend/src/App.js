import React from 'react'
import loginService from './services/loginService'
import registerService from './services/registerService'
import {useState} from 'react'

const App = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [user,setUser] = useState({
        name : '',
        email: '',
        username: '',
        password: ''
    })
    
    const handleRegistration = async (event) => {
        event.preventDefault()
        console.log('Handling Registration Now!')
        const userObject = {
         ...user,
         name : name,
         email: email,
         username: username,
         password: password
        }

        setUser(userObject)
    
        const response = await registerService.register(userObject)
        console.log('Registration successful', JSON.stringify(response))
    }
    
    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('handling login now!')
        const response = await loginService.login({username,password})
        

        console.log('Login Request sent')
        console.log(JSON.stringify(response))
    }

    const handleULoginChange = (event) => {
        event.preventDefault()
        setUsername(event.target.value);
    }

    const handlePLoginChange = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleURegisterChange = (event) => {
        event.preventDefault()
        setUsername(event.target.value);
    }

    const handlePRegisterChange = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleNameChange = (event) => {
        event.preventDefault();
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    console.log('Entered into App')
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit = {handleLogin}>
                <p>Username: <input type = "text" value = {username} name = "username" onChange = {handleULoginChange}/></p>
                <p>Password: <input type = "password" value = {password} name = "password" onChange = {handlePLoginChange} /></p>
                <button type = "submit">Login</button>
            </form>
            <h1>Register</h1>
            <form onSubmit = {handleRegistration}>
                <p>Name: <input name = "name" value = {name} onChange = {handleNameChange}/></p>
                <p>Email: <input name = "email" type = "email" value = {email} onChange = {handleEmailChange}/></p>
                <p>Username: <input name = "username" value = {username} onChange = {handleURegisterChange}/></p>
                <p>Password: <input name = "password" type = "password" value = {password} onChange = {handlePRegisterChange}/></p>
                <button type = "submit">Register</button> 
            </form>
        </div>
    )
   }


export default App