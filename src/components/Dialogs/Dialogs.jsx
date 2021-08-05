import css from './Dialogs.module.css'
import React from 'react'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {

    let dialogDate_element = props.dialogPage.dialogData.map((d) => {
        return (
            <Dialog id={d.id} name={d.name} avatar={d.avatar}/>
        )
    })

    let messageData_element = props.messagePage.messageData.map((m) => {
        return (
            <Message message={m.message} id={m.id}/>
        )
    })



    let addMessage = () => {
        props.addMessage()
    }

    let newMessage = React.createRef()
    let onMessageChange = () => {
        let text = newMessage.current.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={css.all_dialogs_all_messages}>
            <div className={css.all_dialogs}>

                {dialogDate_element}
            </div>

            <div className={css.all_messages}>
                <div>
                    <textarea placeholder='enter your message' onChange={onMessageChange} ref={newMessage}
                              value={props.messagePage.newMessageText}/>
                    <button onClick={addMessage}>addMessage</button>
                </div>
                {messageData_element}

            </div>
        </div>
    )
}
export default Dialogs