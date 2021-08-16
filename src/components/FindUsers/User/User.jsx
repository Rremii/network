import css from './User.module.css'
import React from "react";
import userPhoto from "../../../Images/userPhoto.png"
import {NavLink} from "react-router-dom";

const User = ({user, ...props}) => {
    return (
        <div>
            <div className={css.wrapper}>
                <NavLink to={'/profile/' + user.id}>
                    <img alt={''} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                </NavLink>
                <span>{user.name}</span>
                <span>{user.status}</span>
                <span>
                            {user.followed
                                ? <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {

                                    props.unfollowTC(user.id)

                                }}>unfollow</button>
                                : <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {

                                    props.followTC(user.id)

                                }}>follow</button>}
                        </span>
            </div>

        </div>
    )
}
export default User