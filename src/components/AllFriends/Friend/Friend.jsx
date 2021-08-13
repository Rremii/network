import css from './Friend.module.css'
import React from 'react'
import userPhoto from "../../../Images/userPhoto.png";


const Friend = (props) => {

    return (
        <div className={css.wrapper}>
            <img className={css.avatar} src={props.avatar ? props.avatar : userPhoto} alt="ava"/> {props.name}
        </div>
    )

}


export default Friend