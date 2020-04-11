import axios from 'axios'

const baseUrl = '/login'

const loginService = async (credentials) => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

module.exports = loginService