import React from 'react'
import css from './ProfileData.module.css'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ContactsData from "./ContactsData/ContactsData";



const ProfileData = (props) => {


    return <>
        {
            props.isOwner &&
            <div>
                <div>
                    <button onClick={props.toggleEditMod}>edit</button>
                </div>
                <div>
                    <input type={'file'} onChange={props.setUserPhoto}/>
                </div>
            </div>

        }
        <div className={css.discription}>
            <div>
                {props.profile.fullName}
            </div>

            <div className={css.status}>
                <ProfileStatus status={props.status} updateUserStatusTC={props.updateUserStatusTC}/>
            </div>

            <div>
                looking for a job : {props.profile.lookingForAJob ? "yep" : "nope"}
            </div>

            <ContactsData {...props} />


        </div>
    </>
}

export default ProfileData