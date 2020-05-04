import axios from 'axios'

const baseUrl = 'http://localhost:3001/register'

const register = userObject => {
    const response = axios.post(baseUrl, userObject)
    return response.data
}

export default {register}