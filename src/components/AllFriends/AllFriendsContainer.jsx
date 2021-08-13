import React from 'react'
import {connect} from "react-redux";
import AllFriends from "./AllFriends";
import {compose} from "redux";
import {setFriendsTC} from "../../Redux/FriendsReducer";
import {getFriendsData} from "../../Redux/Friends-selector";

class AllFriendsContainer extends React.Component {
componentDidMount() {
    this.props.setFriendsTC()
}

    render() {
        return <AllFriends  friendsData={this.props.friendsData} />
    }
}


let mapStateToProps = (state) =>{

    return{
        friendsData:getFriendsData(state)
    }
}

export default compose(
    connect(mapStateToProps,{setFriendsTC}))
(AllFriendsContainer);


