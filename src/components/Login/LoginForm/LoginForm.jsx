import React from "react";
import css from './LoginForm.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";





const LoginForm = (props) => {
    return <>
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} name={'email'} placeholder={'login'} validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} name={'password'} placeholder={'password'} type={'password'}
                           validate={[required]}/>

                </div>
                <div>
                    <Field component={"input"} name={'rememberMe'} type={'checkbox'}/> <span className={css.rememberMe}>rememder me</span>
                </div>
                {props.error && <div className={css.mainError}>
                    {props.error}
                </div>}


                {props.captchaUrl && <div>
                    <img  alt={''} src={props.captchaUrl}/>
                    <Field component={Input} name={'captcha'} type={'text'} placeholder={'text from img'} validate={[required]} />
                </div>}
                
                <div>
                    <button>submit</button>
                </div>



            </form>
        </div>
    </>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export default LoginReduxForm

