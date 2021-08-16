import React from 'react'
import css from "./ProfileDataForm.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";


const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>save</button>
        </div>
        <div>
            {props.error && <div className={css.mainError}>
                {props.error}
            </div>}
        </div>


        <div className={css.discription}>
            <div>
                Fullname <Field component={Input} name={'fullName'} placeholder={'fullname'} type={'text'}/>
            </div>

            <div>
                looking for a job <Field component={Input} name={'lookingForAJob'} type={'checkbox'}/>
            </div>

            <div className={css.contact}>
                contacts :
            </div>
            <div className={css.contacts}>

                {Object.keys(props.profile.contacts).map(key => {
                    return <div className={css.contacts}>
                        <div>{key}</div>
                        <Field component={Input} name={'contacts.' + key} placeholder={key} type={'text'}/>
                    </div>
                })}
            </div>

        </div>
    </form>


}


export default reduxForm({form: 'editProfile'})(ProfileDataForm)

