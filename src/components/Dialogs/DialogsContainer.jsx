import {
    addMessage,
} from "../../Redux/DialogReducer";
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
const DialogsContainer = compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer
