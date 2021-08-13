import React from 'react'
import {connect} from "react-redux";
import Nav_bar from "./Nav-bar";
import {compose} from "redux";
import {setFriendsTC} from "../../Redux/FriendsReducer";
import {getFriendsData} from "../../Redux/Friends-selector";

class Nav_barContainer extends React.Component {
    componentDidMount() {
        this.props.setFriendsTC()
    }


    render() {
        return <Nav_bar friendsData={this.props.friendsData} />
    }
}

let mapStateToProps = (state) => {
    return {
        friendsData:getFriendsData(state)
    }
}



export default compose(
    connect(mapStateToProps,{setFriendsTC})
)(Nav_barContainer);


