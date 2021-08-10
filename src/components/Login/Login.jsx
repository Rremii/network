import css from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {loginTC} from "../../Redux/authReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";


const Login = (props) => {


    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    let onSubmit = (LoginData) => {
        console.log(LoginData)
        props.loginTC(LoginData.email, LoginData.password, LoginData.rememberMe)
    }

    return (
        <div>
            <div className={css.login}>Login!</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>


    )
}
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

                <div>
                    <button>submit</button>
                </div>
            </form>
        </div>
    </>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default compose(
    connect(mapStateToProps, {loginTC})
)(Login)