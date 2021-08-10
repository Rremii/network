const ADDMESSAGE = 'ADD-MESSAGE'
const UPDATENEWMESSAGETEXT = 'UPDATE-NEW-MESSAGE-TEXT'


const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADDMESSAGE:
            let newMessage = {id: '5', message: state.newMessageText}
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATENEWMESSAGETEXT :
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
    return {type: ADDMESSAGE}
}
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATENEWMESSAGETEXT, newText: text}
}
export default dialogReducer