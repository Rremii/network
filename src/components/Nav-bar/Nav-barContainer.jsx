import React from 'react'
import {connect} from "react-redux";
import {compose} from "redux";
import {setFriendsTC} from "../../Redux/FriendsReducer";
import {getFriendsData} from "../../Redux/Friends-selector";
import NavBar from "./Nav-bar";

class NavBarContainer extends React.Component {
    componentDidMount() {
        this.props.setFriendsTC()
    }


    render() {
        return <NavBar friendsData={this.props.friendsData} />
    }
}

let mapStateToProps = (state) => {
    return {
        friendsData:getFriendsData(state)
    }
}



export default compose(
    connect(mapStateToProps,{setFriendsTC})
)(NavBarContainer);


