const loginReducer = (state = {}, action) => {
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

export default loginReducer