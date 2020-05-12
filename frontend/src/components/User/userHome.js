import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import '../../styles/userHome.css'
import NavBar from '../Home/NavBar/navbar'

const UserHome = () => {
    const username = useParams().username
    const [user, setUser] = useState(null)
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:3001/user/${username}`)
            .then(response => {
                setUser(response.data)
            })
    })

    return (
        <div className = "container">
            <div className = "navBarContainer">
                <NavBar />
            </div>
        <div className="blogsContainer">
            {user ?
                user.blogs.map(
                    blog =>
                        <Link className= "link" onClick = {() => {history.push(`/${blog.title}`)}} to={`/${blog.title}`}>
                        <div className="blog" key={blog.title}>
                            <div className="title">{blog.title}</div>
                            <div className="userDetails">By {user.username}</div>
                        </div>
                        </Link>
                )
                : <div>Nothing fetched yet</div>
            }
        </div>
        </div>
    )
}


export default UserHome