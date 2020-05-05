const registerReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_USERNAME': {
            const newState = {
                ...state,
                username: action.data.username
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
        case 'SET_EMAIL': {
            const newState = {
                ...state,
                email: action.data.email
            }
            return newState
        }
        case 'SET_NAME': {
            const newState = {
                ...state,
                name: action.data.name
            }
            return newState
        }
        default: return state
    }
}

export const setUsername = username => {
    return(
        {
            type: 'SET_USERNAME',
            data:{
                username: username
            }
        }
    )
}

export const setPassword = password => {
    return(
        {
            type: 'SET_PASSWORD',
            data:{
                password: password
            }
        }
    )
}

export const setEmail = email => {
    return (
        {
            type: 'SET_EMAIL',
            data: {
                email: email
            }
        }
    )
}

export const setName = name => {
    return ({
        type: 'SET_NAME',
        data: {
            name: name
        }
    })
}

export default registerReducer