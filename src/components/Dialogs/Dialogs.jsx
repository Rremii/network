import css from './Dialogs.module.css'
import React from 'react'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLenght, required} from "../../utils/validators/validators";
import AllPosts from "../Profile/All_posts/All_posts";


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

//validators
let maxLenght50 = maxLenght(50)
//
const MessageForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newMessageText'} validate={[required, maxLenght50]}/>
            <button>addMessage</button>
        </form>
    </>
}
const MessageReduxForm = reduxForm({form: 'dialogMessage'})(MessageForm)


export default Dialogs