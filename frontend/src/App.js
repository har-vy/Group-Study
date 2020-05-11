import React from 'react'
import Login from './components/Login/login'
import Register from './components/Register/register'
import Home from './components/Home/home'
import TextEditor from './components/User/textEditor'
import UserHome from './components/User/userHome'
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
                    <Route path='/user/:username/create'>
                        <TextEditor />
                    </Route>
                    <Route path='/user/:username' exact>
                      <UserHome />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}


export default App