import React, {useState} from 'react'
import css from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../Images/userPhoto.png";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";



let ProfileInfo = (props) => {


    let [editmod, setEditMod] = useState(false)

    let toggleEditMod = () => {
        return setEditMod(true)
    }

    let setUserPhoto = (e) => {
        if (e.target.files.length) {
            props.SetUserPhotoTC(e.target.files[0])
        }
    }
    let onSubmit = (formData) => {
        props.saveProfileTC(formData).then(() => {
            setEditMod(false)
        })

    }

    if (!props.profile || props.isFetching === true) {
        return <div className={css.preloader}>
            <Preloader/>
        </div>
    }
    return <>

        <div className={css.avatar_discription}>

            <img alt={''} className={css.avatar}
                 src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto}/>


            {editmod
                ? <ProfileDataForm initialValues={props.profile} {...props} onSubmit={onSubmit}/>
                : <ProfileData {...props} setUserPhoto={setUserPhoto} toggleEditMod={toggleEditMod}/>}


        </div>
    </>
}
export default ProfileInfo


