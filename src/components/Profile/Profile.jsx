import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AllPostsContainer from "./All_posts/All_postsContainer";
import {setUserStatusTC, updateUserStatusTC} from "../../Redux/ProfileReducer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo {...props.profilePage} updateUserStatusTC={props.updateUserStatusTC}/>
            <AllPostsContainer/>
        </div>
    )
}
export default Profile
