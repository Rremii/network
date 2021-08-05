import React from 'react'
import {connect} from "react-redux";
import AllFriends from "./AllFriends";
import {compose} from "redux";




let mapStateToProps = (state) =>{

    return{
        friendsData:state.friendsPage.friendsData


    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}


const AllFriendsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps))
(AllFriends);


export default AllFriendsContainer