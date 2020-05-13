import React, { useState, useEffect } from 'react'
import NavBar from './NavBar/navbar'
import styles from '../../styles/homeStyles.module.css'
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import MainImage from '../../images/chalkboard-620316_1920.jpg'

const Home = () => {
    const title = useParams().title
    const [ blogs, setBlogs ] = useState(null)
    const history = useHistory()
    
    useEffect(() => {
        axios.get('http://localhost:3001/blogs')
        .then(response => {
            setBlogs(response.data)
        })
    }, [title])

    return (
        <div className={styles.container}>
        <div className = {styles.navBarContainer}>
            <NavBar />
        </div>
        <img src={MainImage} className={styles.image} alt=""/>
        <div className ={styles.blogsContainer}>
            {blogs ?
                blogs.map(
                    blog => 
                    <Link className={styles.link} onClick = {() => {history.push(`/${blog.title}`)}} to={`/${blog.title}`}>
                    <div className={styles.blog} key={blog.title}>
                        <div className={styles.title}>{blog.title}</div>
                        <div className={styles.userDetails}>By {blog.user.username}</div>
                    </div>
                    </Link>
                )
                :
                <div>Please Wait...</div>
            }
        </div>
        </div>
    )
}

export default Home