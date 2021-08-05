import React from 'react'
import {connect} from "react-redux";
import Nav_bar from "./Nav-bar";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        friendsData: state.friendsPage.friendsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const Nav_barContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Nav_bar);


export default Nav_barContainer