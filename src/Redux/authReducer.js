import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'auth/SET_USER_DATA'
const LOGOUT = 'auth/LOGOUT'
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'

//state
let initialState = {
    email: null,
    login: null,
    currentUserId: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA :

            return {
                ...state,
                email: action.data.email,
                login: action.data.login,
                currentUserId: action.data.id,
                isAuth: true
            }
        case LOGOUT :
            return {
                ...state,
                email: null,
                login: null,
                currentUserId: null,
                isAuth: false
            }
        case GET_CAPTCHA_URL :
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }

        default:
            return state
    }
}
//action creaters
export const setAuthUserData = (email, id, login) => {
    return {type: SET_USER_DATA, data: {email, id, login}}
}
export const logout = () => {
    return {type: LOGOUT}
}
export const getCaptchaUrl = (captchaUrl) => {
    return {type: GET_CAPTCHA_URL, captchaUrl}
}

export default authReducer
//thunks
export const getLoginDataTC = () => async (dispatch) => {
    let response = await authAPI.getLoginData()
    if (response.resultCode === 0) {
        let {email, id, login} = response.data
        dispatch(setAuthUserData(email, id, login))
    }
}


export const loginTC = (email, password, rememberMe = false,captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) {
        dispatch(getLoginDataTC())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlTC())
        }
        let errorText = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit("login", {_error: errorText}))
    }
}


export const logoutTC = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(logout())
    }
}
export const getCaptchaUrlTC = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrl(response.data.url))

}



