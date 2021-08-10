import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import AllFriendsContainer from "./components/AllFriends/AllFriendsContainer";
import Nav_barContainer from "./components/Nav-bar/Nav-barContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeAppTC} from "./Redux/AppReducer";
import Preloader from "./components/common/preloader/Preloader";


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
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
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