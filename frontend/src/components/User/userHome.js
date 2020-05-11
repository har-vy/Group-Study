import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Editor, EditorState , convertFromRaw} from 'draft-js'
import axios from 'axios'
import '../../styles/userHome.module.css'

const UserHome = () => {
    const username = useParams().username
    const [ user, setUser ] = useState(null)
    
    useEffect(() => {
        axios.get(`http://localhost:3001/user/${username}`)
        .then(response => {
            setUser(response.data)
        })
    })

    const savedContent = (content) => {
        return JSON.parse(content)
    }

    return(
        <div className = "blogsContainer">
            {   user ?
                user.blogs.map(
                    blog => 
                    <div className = "blog" key = {blog.title}>
                      <Editor editorState = {blog? EditorState.createWithContent(convertFromRaw(savedContent(blog.content))) 
                        : EditorState.createEmpty()} readOnly = {true} />
                    </div>
                )
                : <div>Nothing fetched yet</div>
            }
        </div>
    )
}


export default UserHome