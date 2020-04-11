import axios from 'axios'

const baseUrl = '/register'

const registerService = userObject => {
    return axios.post(baseUrl, userObject)
}

module.exports = registerService