const loginReducer = (state = {redirect: false}, action) => {
 switch(action.type){
     case 'SET_USERNAME': {
         const newState = {
             ...state,
             username : action.data.username
         }
         return newState
     }
     case 'SET_PASSWORD': {
         const newState = {
             ...state,
             password: action.data.password
         }
         return newState
     }
     case 'LOGOUT': {
         const newState = {
             ...state,
             loggedIn: false
         }
         return newState
     }
     case 'SET_ERROR': {
         const newState = {
             ...state,
             error: action.data.error
         }
         return newState
     }
     case 'REDIRECT': {
         const newState = {
             ...state,
             redirect: !state.redirect
         }
         return newState
     }
     case 'LOGIN': {
         const newState = {
             ...state,
             loggedIn: true
         }
         return newState
     }
     default:
         return state
 }
}

export const setUsername = username => {
    return (
        {
            type: 'SET_USERNAME',
            data: {
                username: username
            }
        }
    )
}

export const setPassword = password => {
    return (
        {
            type: 'SET_PASSWORD',
            data: {
                password: password
            }
        }
    )
}

export const logout = () => {
    return({
        type: 'LOGOUT'
    })
}

export const login = () => {
    return({
        type: 'LOGIN'
    })
}

export const setError = error => {
    return({
        type: 'SET_ERROR',
        data: {
            error: error
        }
    })
}

export const redirect = () => {
    return({
        type: 'REDIRECT'
    })
}

export default loginReducer