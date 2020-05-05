import React from 'react'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {

    console.log('Entered into App')
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}


export default App