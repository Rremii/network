import React from 'react'
import Header from "./Header";
import {loginTC, setAuthUserData} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {compose} from "redux";



class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.loginTC()

    }

    render() {
        return <Header {...this.props} />
    }
}


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default compose(
    connect(mapStateToProps, {setAuthUserData, loginTC})
)(HeaderContainer)