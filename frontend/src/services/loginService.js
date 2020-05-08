import axios from 'axios'

const baseUrl = 'http://localhost:3001/login'

const login = async (credentials) => {
    const response = await axios.post(baseUrl, credentials).catch(e => console.log(JSON.stringify(e)))
    return response
}

export default {login}