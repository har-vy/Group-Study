import React from 'react'
import NavBarItem from './navbaritem'
import styles from '../../../styles/homeStyles.module.css'
import { Link, useHistory } from 'react-router-dom'

const NavBar = () => {
    let d = new Date()
    let displayDate = (d.getDay() + 1) + '-' + (d.getMonth() + 1) + '-' + (d.getFullYear())
    let history = useHistory()
    let loggedIn = false
    let token = localStorage.getItem('loggedInUser')
    let name = localStorage.getItem(token)

    if(token){
        loggedIn = true
    }

    const handleLogout = () => {
        const token = localStorage.getItem('loggedInUser')
        localStorage.removeItem(token)
        localStorage.removeItem('loggedInUser')
        history.push("/")
        loggedIn = false;
    }


    return (
        <div className={styles.navBar}>
            <div className={styles.date}> {displayDate} </div>
            <div className={styles.links}>{
                !loggedIn ?
                <div className={styles.home}>
                    <Link className={styles.link} onClick={() => history.push("/")} to="/">
                        <NavBarItem name="Home" />
                    </Link>
                </div>
                :
                <div className={styles.home}>
                    <Link className={styles.link} onClick={() => history.push(`/user/${name}`)} to={`/user/${name}`}>
                        <NavBarItem name="Home" />
                    </Link>
                </div>
}
                {
                    !loggedIn ?
                        <div className={styles.login}>
                            <Link className={styles.link} onClick={() => history.push("/login")} to="/login">
                                <NavBarItem name="Login" />
                            </Link>
                        </div>
                        :
                        <div className={styles.login}>
                            <Link className={styles.link} onClick={handleLogout} to="/">
                                <NavBarItem name="Logout" />
                            </Link>
                        </div>
                }
                {
                 !loggedIn ?
                <div className={styles.register}>
                    <Link className={styles.link} onClick={() => history.push("/register")} to="/register">
                        <NavBarItem name="Register" />
                    </Link>
                </div>:
                <div className = {styles.create}><Link className={styles.link} onClick={() => history.push(`/user/${name}/create`)} to={`/user/${name}/create`}>
                <NavBarItem name="Create" />
            </Link></div>
                }
                <div className={styles.userName}>
                    <NavBarItem name={name === null? '': `Welcome ${name}!`} />
                </div>
            </div>
        </div>
    )
}


export default NavBar