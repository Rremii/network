import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {initializApp} from "./AppReducer";


const SET_USER_DATA = 'auth/SET_USER_DATA'
const LOGOUT = 'auth/LOGOUT'

//state
let initialState = {
    email: null,
    login: null,
    currentUserId: null,
    isAuth: false,
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

export default authReducer
//thunks
export const getLoginDataTC = () => async (dispatch) => {
    let response = await authAPI.getLoginData()
    if (response.resultCode === 0) {
        let {email, id, login} = response.data
        dispatch(setAuthUserData(email, id, login))
    }
}


export const loginTC = (email, password, rememberMe = false) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getLoginDataTC())
    } else {
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


