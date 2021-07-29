import React from 'react'
import Friend from "./Friend/Friend";


const AllFriends = (props) => {

    let friends_element = props.friendsData.map((d) => {

        return (
            <Friend   name={d.name} avatar={d.avatar} />
        )
    })
    return (
        <div>
            {friends_element}
        </div>

    )

}


export default AllFriends