import css from './FindUsers.module.css'
import React from "react";
import userPhoto from "../../Images/userPhoto.png"
import {NavLink} from "react-router-dom";

const FindUsers = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.slice(0, 10).map(p => {
                    return <span
                        className={props.currentPage === p && css.selectedPage}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>{p} </span>
                })
                }
            </div>
            {
                props.users.map(u =>
                    <div className={css.wrapper}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                        <span>
                            {u.followed ?
                                <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {

                                    props.unfollowTC(u.id)

                                }}>unfollow</button> :
                                <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {

                                    props.followTC(u.id)

                                }}>follow</button>}
                        </span>
                    </div>
                )
            }

        </div>
    )
}
export default FindUsers