import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AllPostsContainer from "./All_posts/All_postsContainer";
import {setUserStatusTC, updateUserStatusTC} from "../../Redux/ProfileReducer";


const Profile = (props) => {

    return (
        <profile>
            <ProfileInfo {...props.profilePage} updateUserStatusTC={props.updateUserStatusTC}/>
            <AllPostsContainer/>
        </profile>
    )
}
export default Profile
