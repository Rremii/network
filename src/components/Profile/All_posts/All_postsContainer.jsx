import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import AllPosts from "./All_posts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {

    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}


const AllPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AllPosts);

export default AllPostsContainer
