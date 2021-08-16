import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLenght, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";




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


export default MessageReduxForm