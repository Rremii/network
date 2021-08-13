import React, {useEffect, useState} from 'react'


const ProfileStatusHooks = (props) => {

    let [editmod, setEditMod] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMod = () => {
        setEditMod(true)
    }
    let deactivateEditMod = () => {
        setEditMod(false)
        props.updateUserStatusTC(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return <>
        {!editmod &&
        <div>
                <span onDoubleClick={activateEditMod}>
                    status: {props.status || '-----'}
                </span>
        </div>}
        {editmod &&
        <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMod} value={status}/>
        </div>}

    </>

}

export default ProfileStatusHooks

