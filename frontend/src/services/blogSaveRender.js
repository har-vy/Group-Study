import axios from 'axios'

const baseUrl = 'http://localhost:3001/user/'

export const blogSave = async (props) => {
    const {content, username, title} = props
    const url = baseUrl.concat(`${username}`) 
    await axios.post(url, {content: content,username: username,title: title})
}
