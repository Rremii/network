import React from 'react'
import css from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../Images/userPhoto.png";
import ProfileStatusHooks from "./ProfileStatusHooks";


let ProfileInfo = (props) => {
    if (!props.profile || props.isFetching === true) {
        return <div className={css.preloader}>
            <Preloader/>
        </div>
    }

    return <>

        <div className={css.avatar_discription}>
            <img className={css.avatar}
                 src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto}/>
            <div className={css.discription}>
                <div>{props.profile.fullName}</div>
                <div className={css.status}>
                    <ProfileStatusHooks status={props.status}
                                        updateUserStatusTC={props.updateUserStatusTC}/>
                </div>
                {props.profile.lookingForAJob ? <div>looking for a job : yes</div> :
                    <div>looking for a job : nope</div>}
            </div>
        </div>
    </>
}

export default ProfileInfo
