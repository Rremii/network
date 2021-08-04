import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, setUserProfileTC, toggleIsFetching} from "../../Redux/ProfileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {Redirect} from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }

        this.props.setUserProfileTC(userId)

    }

    render() {

        if(!this.props.isAuth){alert('you should login first!')
            return <Redirect to={"/login"}/>}

        return <>

            <Profile {...this.props} />
        </>
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        isFetching: state.profilePage.isFetching,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    setUserProfileTC
})(WithUrlDataContainerComponent)
