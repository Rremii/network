import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        messagePage: state.dialogPage,
        isAuth: state.auth.isAuth
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
    const superDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default superDialogsContainer
