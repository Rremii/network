const ADDMESSAGE = 'dialogPage/ADD-MESSAGE'
const UPDATENEWMESSAGETEXT = 'dialogPage/UPDATE-NEW-MESSAGE-TEXT'


let initialState = {
    dialogData: [
        {
            id: '0',
            name: 'Mert',
            avatar: 'https://i.artfile.me/wallpaper/16-12-2011/1920x1440/zhivotnye-koty-ochki-bazilio-kote-596618.jpg'
        },
        {id: '1', name: 'Remi', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg'},
        {id: '2', name: 'Pashok', avatar: 'https://vraki.net/sites/default/files/mood/ya.jpg'},
        {
            id: '3',
            name: 'Sanyaa',
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLRN2Kc8z7vb59WJjUH2iiX4bLokqSS_sNvoSpQa=s900-c-k-c0x00ffffff-no-rj'
        },
    ],
    messageData: [
        {id: '0', message: 'hey'},
        {id: '1', message: 'wats up'},
        {id: '2', message: 'hows it going'},
        {id: '3', message: ' yoo'},

    ],
    newMessageText: ''
}


const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDMESSAGE:
            return {
                ...state, newMessageText: '',
                messageData: [...state.messageData, {id: '5', message: action.newMessageText}]
            }

        default:
            return state
    }
}

export const addMessage = (newMessageText) => {
    return {type: ADDMESSAGE,newMessageText}
}

export default dialogReducer