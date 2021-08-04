import css from './Friend.module.css'
import React from 'react'


const Friend = (props) =>{
    return(
        <div className={css.wrapper}>
            <img className={css.avatar} src={props.avatar} alt="ava"/> {props.name}
        </div>
    )

}




export default Friend