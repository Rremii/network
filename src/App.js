import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import AllFriendsContainer from "./components/AllFriends/AllFriendsContainer";
import Nav_barContainer from "./components/Nav-bar/Nav-barContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeAppTC} from "./Redux/AppReducer";
import Preloader from "./components/common/preloader/Preloader";
import withSuspense from "./components/Hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))

class App extends React.Component {

    componentDidMount() {
        this.props.initializeAppTC()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (

            <div className="wrapper">
                <HeaderContainer/>
                <Nav_barContainer/>
                <div className="content">
                    <Route path='/findUsers' render={() => <FindUsersContainer/>}/>
                    <Route path='/friends' render={() => <AllFriendsContainer/>}/>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/dialogs' render={ withSuspense(DialogsContainer)} />
                    <Route path='/login' render={ withSuspense(Login)}/>
                </div>
            </div>
        );
    }
}



let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    connect(mapStateToProps, {initializeAppTC}),
    withRouter,
)(App)