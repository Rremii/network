import {authAPI, followAPI} from "../api/api";
import {follow, toggleFollowingProgress} from "./FindUsersReducer";

const SET_USER_DATA = 'SET_USER_DATA'

//state
let initialState = {
    email: null,
    Id: null,
    login: null,
    isAuth: false,


};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}
//action creaters
export const setAuthUserData = (email, Id, login) => {
    return {type: SET_USER_DATA, data: {email, Id, login}}
}

export default authReducer
//thunks
export const loginTC = () =>{
    return (dispatch)=>{

        authAPI.login().then(response => {
            if (response.resultCode === 0) {
                let {email, id, login} = response.data
                dispatch(setAuthUserData(email, id, login))
            }
        })

    }
}