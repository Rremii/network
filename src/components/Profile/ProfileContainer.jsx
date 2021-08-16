import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    saveProfileTC,
    SetUserPhotoTC,
    setUserProfileTC,
    setUserStatusTC,
    updateUserStatusTC
} from "../../Redux/ProfileReducer";
import {compose} from "redux";
import {setFriendsTC} from "../../Redux/FriendsReducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.currentUserId;
            if (!userId || !this.props.isAuth) {
               return  this.props.history.push('/login')
            }
        }
        this.props.setUserProfileTC(userId)
        this.props.setUserStatusTC(userId)
    }

    componentDidMount() {

        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId ||  !this.props.isAuth) {
            this.refreshProfile()
        }
    }

    render() {

        return <>

            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}/>
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        profilePage: state.profilePage,
        currentUserId: state.auth.currentUserId,
        isAuth: state.auth.isAuth

    }
}


export default compose(
    connect(mapStateToProps, {
        setUserProfileTC,
        setUserStatusTC,
        updateUserStatusTC,
        setFriendsTC,
        SetUserPhotoTC,
        saveProfileTC
    }),
    withRouter,
)(ProfileContainer)