import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import AllFriendsContainer from "./components/AllFriends/AllFriendsContainer";
import Nav_barContainer from "./components/Nav-bar/Nav-barContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {

    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Nav_barContainer/>
            <div className="content">
                <Route path='/findUsers' render={() => <FindUsersContainer/>}/>
                <Route path='/friends' render={() => <AllFriendsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>
            </div>
        </div>
    );
}

export default App