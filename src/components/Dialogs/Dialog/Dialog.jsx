import css from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import React from 'react'

const Dialog = (props) => {

    return (
        <NavLink to={'/dialogs/' + props.id} activeClassName={css.active}>
            <div className={css.dialog}>
                <img  src={props.avatar}  alt="ava"/>{props.name}
            </div>
        </NavLink>
    )
}

export default Dialog