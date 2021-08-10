import {createSelector} from "reselect";

export const getFriendsDataSelector = (state) => {
    return state.friendsPage.friendsData
}
export const getFriendsData = createSelector(getFriendsDataSelector,
    (friends) => {
        return friends.filter(f => f.followed === true)
    })