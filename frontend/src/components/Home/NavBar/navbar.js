import React from 'react'
import NavBarItem from './navbaritem'
import styles from '../homeStyles.module.css'

const NavBar = () => {
    let d = new Date()
    let displayDate = (d.getDay() + 1) + '-' + (d.getMonth() + 1) + '-' + (d.getFullYear())
    return (
        <div className = {styles.navBar}>
            <div className = {styles.date}>{displayDate}</div>
            <div className = {styles.links}>
                <NavBarItem name = "Home" />
                <div className = {styles.login}><NavBarItem name = "Login" /></div>
                <div className = {styles.register}><NavBarItem name = "Register" /></div>
            </div>
        </div>
    )
}

export default NavBar