const ADDPOST = 'ADD-POST'
const UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT'




const profileReducer = (state , action) => {

    switch (action.type) {
        case ADDPOST :
            let newPost = {id: '5', message: state.newPostText, like: '0'}
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATENEWPOSTTEXT :
            state.newPostText = action.newText
            return state
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



export default profileReducer