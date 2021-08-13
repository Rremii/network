import React from 'react'
import Friend from "./Friend/Friend";
import userPhoto from "../../Images/userPhoto.png"

const AllFriends = (props) => {

    let friends_element = props.friendsData.map((d) => {
        return (
            <Friend name={d.name} avatar={d.photos.small}/>
        )
    })
    return (
        <div>
            {friends_element}
        </div>

    )

}


export default AllFriends