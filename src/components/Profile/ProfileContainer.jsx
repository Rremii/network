import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    setUserProfileTC,
    setUserStatusTC,
    updateUserStatusTC
} from "../../Redux/ProfileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {compose} from "redux";
import {setFriendsTC} from "../../Redux/FriendsReducer";
import withAuthRedirect from "../Hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.currentUserId;
            if (!userId) {
                debugger
                this.props.history.push('/login')
            }
        }
        this.props.setUserProfileTC(userId)
        this.props.setUserStatusTC(userId)
    }

    render() {


        return <>

            <Profile {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        profilePage: state.profilePage,
        currentUserId: state.auth.currentUserId
    }
}


export default compose(
    connect(mapStateToProps, {
        setUserProfileTC,
        setUserStatusTC,
        updateUserStatusTC,
        setFriendsTC,
    }),
    withRouter,
)(ProfileContainer)