import css from "./ContactsData.module.css"
import React from "react";

const ContactsData = (props) => {


    return <>


        <div className={css.contacts}>
            contacts :
            {Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
        </div>


    </>
}


const Contacts = ({contactTitle, contactValue}) => {
    return <div>
        {contactTitle} : {contactValue}
    </div>
}

export default ContactsData