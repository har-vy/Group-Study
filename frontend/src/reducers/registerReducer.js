const registerReducer = (state = {}, action) => {
    switch(action.type){
        case 'CREATE_USER': {
            newState = {...action.data}
            return newState
        }
        default:
            return state
    }
}

export const createUser = (props) => {
    return({
        type: 'CREATE_USER',
        data: {
            username: props.username,
            email: props.email,
            name: props.name,
            password: props.password
        }
    })
}

export default registerReducer