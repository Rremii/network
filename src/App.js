import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav_bar from './components/Nav-bar/Nav-bar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import AllFriendsContainer from "./components/AllFriends/AllFriendsContainer";
import Nav_barContainer from "./components/Nav-bar/Nav-barContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";


const App = (props) => {

    return (
        <div className="wrapper">
            <Header/>
            <Nav_barContainer/>
            <div className="content">
                <Route path='/findUsers' render={() => <FindUsersContainer/>}/>
                <Route path='/friends' render={() => <AllFriendsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            </div>
        </div>
    );
}

export default App