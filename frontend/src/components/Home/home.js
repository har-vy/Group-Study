import React from 'react'
import NavBar from './NavBar/navbar'
import styles from '../../styles/homeStyles.module.css'

const Home = () => {

    return (
        <div className = {styles.navBarContainer}>
            <NavBar />
        </div>
    )
}

export default Home