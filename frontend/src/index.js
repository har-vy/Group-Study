import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import loginReducer from './reducers/loginReducer'
import registerReducer from './reducers/registerReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    user: userReducer
})

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)