import {authAPI} from "../api/api";
import {Redirect} from "react-router-dom";
import {stopSubmit} from "redux-form";
import {initializApp} from "./AppReducer";


const SET_USER_DATA = 'SET_USER_DATA'
const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID'
const LOGOUT = 'LOGOUT'

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
        /*case SET_CURRENT_USER_ID :
            return {
                ...state,
                currentUserId: action.id
            }*/
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
/*export const setCurrentUserId = (id) => {

    return {type: SET_CURRENT_USER_ID, id}
}*/
export const logout = () => {
    return {type: LOGOUT}
}

export default authReducer
//thunks
export const getLoginDataTC = () => {

    return (dispatch) => {

        authAPI.getLoginData().then(response => {
            if (response.resultCode === 0) {
                let {email, id, login} = response.data
                dispatch(setAuthUserData(email, id, login))
            }
            dispatch(initializApp())


        })

    }
}


export const loginTC = (email, password, rememberMe = false) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getLoginDataTC())
            } else {
                let errorText = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                dispatch(stopSubmit("login", {_error: errorText}))
            }
        })

    }
}
export const logoutTC = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(logout())
            }
        })

    }
}