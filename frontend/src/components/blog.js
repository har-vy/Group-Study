import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NavBar from './Home/NavBar/navbar'
import { EditorState, convertFromRaw, Editor } from 'draft-js'

const Blog = () => {
    const title = useParams().title
    const [ blog, setBlog ] = useState(null)
    
    useEffect(() => {
        axios.get(`http://localhost:3001/blogs/${title}`)
        .then(response => {
            setBlog(response.data)
        })
    },[title])

    return(
       <div className="container">
           <div className="navBarContainer">
               <NavBar />
           </div>
           {blog ?
           <Editor editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(blog.content)))}/>
           :<div>Please Wait...</div>
           }
       </div>        
    )
}

export default Blog