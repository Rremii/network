import {followAPI, profileAPI} from "../api/api";
import {follow, toggleFollowingProgress} from "./FindUsersReducer";

const ADDPOST = 'ADD-POST'
const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE ='SET_USER_PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    postData: [
        {id: '0', message: 'hey', like: '21'},
        {id: '1', message: 'hello', like: '15'},
    ],
    newPostText: '',
    profile: null,
    isFetching: false
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATENEWPOSTTEXT :
            return {
                ...state,
                newPostText: action.newText
            }
        case ADDPOST :
            return {
                ...state,
                postData: [...state.postData, {id: '5', message: state.newPostText, like: '0'}],
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
        default:
            return state
    }
}
export const addPostActionCreator = () => {
    return {type: ADDPOST}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATENEWPOSTTEXT, newText: text}
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export default profileReducer
export const setUserProfileTC = (userId) =>{
    return (dispatch)=>{
        dispatch(toggleIsFetching(true))
        profileAPI.setUserProfile(userId).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUserProfile(response))
        })
    }
}