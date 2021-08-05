import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../Hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        messagePage: state.dialogPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}
    const superDialogsContainer =compose(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
    )(Dialogs)

export default superDialogsContainer
