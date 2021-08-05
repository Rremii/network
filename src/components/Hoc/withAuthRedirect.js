import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component) => {
    class redirectComponent extends React.Component {
        render() {

            if (!this.props.isAuth) {
                alert('you should login first!')
                return <Redirect to={"/login"}/>
            }
            return <Component {...this.props} />
        }
    }



    let connectedAuthRedirectComponent = connect(mapStateToProps)(redirectComponent)

    return connectedAuthRedirectComponent
}
export default withAuthRedirect