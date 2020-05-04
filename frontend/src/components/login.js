const Login = () => {
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit = {() => handleLogin()}>
                <p>Username: <input type = "text" name = "username" /></p>
                <p>Password: <input type = "password" name = "password" /></p>
                <button type = "submit">Login</button>
            </form>
        </div>
    )
}

export default Login