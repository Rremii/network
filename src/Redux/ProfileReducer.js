import {profileAPI} from "../api/api";

const ADDPOST = 'ADD-POST'
const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    postData: [
        {id: '0', message: 'hey', like: '21'},
        {id: '1', message: 'hello', like: '15'},
    ],
    newPostText: '',
    profile: null,
    isFetching: false,
    status: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPOST :
            return {
                ...state,
                postData: [...state.postData, {id: '5', message: action.newPostText, like: '0'}],
                newPostText: '',
            }
        case SET_USER_PROFILE :
            return {
                ...state,
                profile: action.profile,
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case SET_USER_STATUS :
            return {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}
export const addPost = (newPostText) => {
    return {type: ADDPOST, newPostText}
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const setUsetStatus = (status) => {
    return {type: SET_USER_STATUS, status}
}
export default profileReducer


export const setUserProfileTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        profileAPI.setUserProfile(userId).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUserProfile(response))
        })
    }
}
export const setUserStatusTC = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(response => {
            dispatch(setUsetStatus(response.data))
        })
    }
}
export const updateUserStatusTC = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUsetStatus(status))
            }
        })
    }
}
