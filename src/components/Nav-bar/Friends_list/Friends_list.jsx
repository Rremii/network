import React from 'react'
import css from './Friends_list.module.css'


const FriendList = (props) => {


    return (
        <div className={css.friends_list}>
            <img className={css.avatar} src={props.avatar}
                 alt="ava"/>
            <div className={css.name}>{props.name}</div>
        </div>

    )
}
export default FriendList
