import React from "react";
import css from './Login.module.css'
import {loginTC} from "../../Redux/authReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import LoginReduxForm from "./LoginForm/LoginForm";


const Login = (props) => {


    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    let onSubmit = (LoginData) => {
        console.log(LoginData)
        props.loginTC(LoginData.email, LoginData.password, LoginData.rememberMe,LoginData.captcha)
    }

    return (
        <div>
            <div className={css.login}>Login!</div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>


    )
}

let mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}
export default compose(
    connect(mapStateToProps, {loginTC})
)(Login)