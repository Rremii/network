import css from './Dialogs.module.css'
import React from 'react'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLenght, required} from "../../utils/validators/validators";
import MessageReduxForm from "./MessageForm/MessageForm";



const Dialogs = (props) => {

    let dialogDate_element = props.dialogPage.dialogData.map((d) => {
        return (
            <Dialog key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>
        )
    })

    let messageData_element = props.messagePage.messageData.map((m) => {
        return (
            <Message key={m.id} message={m.message} id={m.id}/>
        )
    })


    let addMessage = (newMessageText) => {
        props.addMessage(newMessageText.newMessageText)
    }


    return (
        <div className={css.all_dialogs_all_messages}>
            <div className={css.all_dialogs}>

                {dialogDate_element}
            </div>

            <div className={css.all_messages}>

                <MessageReduxForm onSubmit={addMessage}/>

                {messageData_element}

            </div>
        </div>
    )
}



export default Dialogs