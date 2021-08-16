import {usersAPI} from "../api/api";

const SET_FRIENDS = 'friendsPage/SET_FRIENDS'

let initialState = {
    friendsData: [
        /* {
             id: '0',
             name: 'Mert',
             photos:{
                 small:'https://i.artfile.me/wallpaper/16-12-2011/1920x1440/zhivotnye-koty-ochki-bazilio-kote-596618.jpg'
             }
         },
         {id: '1', name: 'Remi', photos:{
                 small: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg'}},
         {id: '2', name: 'Pashok', photos:{
                 small: 'https://vraki.net/sites/default/files/mood/ya.jpg'}},
         {
             id: '3',
             name: 'Sanyaa',
             photos:{
                 small: 'https://yt3.ggpht.com/ytc/AKedOLRN2Kc8z7vb59WJjUH2iiX4bLokqSS_sNvoSpQa=s900-c-k-c0x00ffffff-no-rj'
         }},
 */
    ],
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS : {
            return {
                ...state,
                friendsData: [...action.friends],
            }
        }
        default:
            return state

    }
}
export const setFriends = (friends) => {
    return {type: SET_FRIENDS, friends}
}
export const setFriendsTC = () => async (dispatch) => {
    let response = await usersAPI.getFriends()
    dispatch(setFriends(response.items))
}

export default friendsReducer