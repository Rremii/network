import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AllPostsContainer from "./All_posts/All_postsContainer";





const Profile = (props) => {

    return (
        <profile >
            <ProfileInfo {...props.profilePage}  />
            <AllPostsContainer />
        </profile>
    )
}
export default Profile
