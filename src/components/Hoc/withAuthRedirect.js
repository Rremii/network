import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

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

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    let connectedAuthRedirectComponent = connect(mapStateToProps)(redirectComponent)

    return connectedAuthRedirectComponent
}
export default withAuthRedirect