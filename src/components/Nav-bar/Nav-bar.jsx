import React from 'react'
import css from './Nav-bar.module.css'
import {NavLink} from "react-router-dom";
import Friends_list from "./Friends_list/Friends_list";
import userPhoto from "../../Images/userPhoto.png"

const Nav_bar = (props) => {

    let friends_list = props.friendsData.slice(0, 3).map((d) => {
        return (<Friends_list avatar={d.photos.small ? d.photos.small : userPhoto} name={d.name}/>)
    })


    return (
        <div className={css.nav}>
            <NavLink activeClassName={css.active_btn} to="/profile">
                <button>Profile</button>
            </NavLink>
            <NavLink activeClassName={css.active_btn} to="/dialogs">
                <button>Messages</button>
            </NavLink>
            <NavLink activeClassName={css.active_btn} to="/news">
                <button>News</button>
            </NavLink>
            < NavLink activeClassName={css.active_btn} to="/findUsers">
                <button>Find users</button>
            </NavLink>
            <NavLink activeClassName={css.active_btn} to="/friends">
                <button>Friends</button>
            </NavLink>
            <div className={css.best}>Best:</div>
            {friends_list}
        </div>
    )
}

export default Nav_bar
