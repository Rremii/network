import dialogsReducer from "./Dialog-reducer";
import profileReducer from "./Profile-reducer";

let store = {
    _state: {
        friendsPage: {

            friendsData: [{
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
                {
                    id: '4',
                    name: 'football_ball',
                    avatar: 'https://samara.allithave.ru/image/product-images/2021/03/24/11/38/596889_0.jpg'
                },
            ],
        },
        dialogPage: {
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
        },
        profilePage: {
            postData: [
                {id: '0', message: 'hey', like: '21'},
                {id: '1', message: 'hello', like: '15'},
            ],
            newPostText: ''


        }
    },
    _callsubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callsubscriber = observer
    },


    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogPage, action)
        this._callsubscriber()
    },
}

export default store



