import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AllPostsContainer from "./All_posts/All_postsContainer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo {...props.profilePage}
                         isOwner={props.isOwner}
                         updateUserStatusTC={props.updateUserStatusTC}
                         SetUserPhotoTC={props.SetUserPhotoTC}
                         saveProfileTC={props.saveProfileTC}/>
            <AllPostsContainer/>
        </div>
    )
}
export default Profile
