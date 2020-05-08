const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_TOKEN': {
            const newState = {
                ...state,
                token: action.data.token
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

export const setToken = token => {
    return({
        type: 'SET_TOKEN',
        data: {
            token: token
        }
    })
}

export const setName = name => {
    return({
        type: 'SET_NAME',
        data: {
            name: name
        }
    })
}

export default userReducer


