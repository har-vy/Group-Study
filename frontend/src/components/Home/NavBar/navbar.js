import React from 'react'
import NavBarItem from './navbaritem'
import styles from '../../../styles/homeStyles.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    let d = new Date()
    let displayDate = (d.getDay() + 1) + '-' + (d.getMonth() + 1) + '-' + (d.getFullYear())
    return (
        <div className = {styles.navBar}>
            <div className = {styles.date}>{displayDate}</div>
            <div className = {styles.links}>
                <div className = {styles.home}>
                    <Link className = {styles.link} to = "/">
                        <NavBarItem name = "Home" />
                    </Link>
                </div>

                <div className = {styles.login}>
                    <Link className = {styles.link} to = "/login">
                        <NavBarItem name = "Login" />
                    </Link>
                </div>


                <div className = {styles.register}>
                    <Link className = {styles.link} to = "/register">
                        <NavBarItem name = "Register" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar