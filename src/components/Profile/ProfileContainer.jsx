import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, setUserProfileTC, toggleIsFetching} from "../../Redux/ProfileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../Hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }

        this.props.setUserProfileTC(userId)

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
        isFetching: state.profilePage.isFetching,
    }
}


export default compose(
    connect(mapStateToProps, {setUserProfileTC}),
    withRouter,

)(ProfileContainer)