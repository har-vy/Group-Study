const Register = () => {
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit = {() => handleRegistration()}>
                <p>Name: <input name = "name" /></p>
                <p>Email: <input name = "email" /></p>
                <p>Password: <input name = "password" /></p>
                <p>Username: <input name = "username" /></p>
                <button type = "submit">Register</button> 
            </form>
        </div>
    )
}

export default Register