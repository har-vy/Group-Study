const loginReducer = (state = {}, action) => {
 switch(action.type){
     case 'SET_USER': {
         const newState = {
             username: action.data.username,
             password: action.data.password
         }
         return newState
     }
     case 'RESET_USER':
         return {}
     default:
         return state
 }
}

export const setUser = ({username}, {password}) => {
    return (
        {
            type: 'SET_USER',
            data: {
                username: username,
                password: password

            }
        }
    )
}

export const resetUser = () => {
    return({
        type: 'RESET_USER'
    })
}

export default loginReducer