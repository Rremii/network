import {profileAPI} from "../api/api";

const ADDPOST = 'profilePage/ADD-POST'
const UPDATENEWPOSTTEXT = 'profilePage/UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'profilePage/SET_USER_PROFILE'
const TOGGLE_IS_FETCHING = 'profilePage/TOGGLE_IS_FETCHING'
const SET_USER_STATUS = 'profilePage/SET_USER_STATUS'
const DELETE_POST = 'profilePage/DELETE_POST'

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
        case DELETE_POST :
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.postId)
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
export const deletePost = (postId) => {
    return {type: DELETE_POST, postId}
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


export const setUserProfileTC = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await profileAPI.setUserProfile(userId)
    dispatch(toggleIsFetching(false))
    dispatch(setUserProfile(response))
}


export const setUserStatusTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setUsetStatus(response.data))
}

export const updateUserStatusTC = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUsetStatus(status))
    }
}

