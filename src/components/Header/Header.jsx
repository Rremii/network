import React from 'react'
import css from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={css.header}>
            <NavLink to='/profile'>
                <button className={css.logo}><img src="https://www.sportspng.com/images/7/5fd8ae3d757c2.png"
                                                  alt="logo"/></button>
            </NavLink>
            <div className={css.login}>
                {props.isAuth ? 'wellcome ' + props.login : <NavLink to='/login'>
                    login
                </NavLink>}
            </div>


        </header>
    )
}
export default Header