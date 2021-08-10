import {connect} from "react-redux";
import {
    followTC,
    getUsersTC,
    unfollowTC
} from "../../Redux/FindUsersReducer";
import React from "react";
import FindUsers from "./FindUsers";
import Preloader from "../common/preloader/Preloader";
import css from "./FindUsersContainer.module.css"

class FindUsersAPIContainer extends React.Component {


    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage) => {
        this.props.getUsersTC(currentPage, this.props.pageSize)
    }

    render() {
        return <>
            <div className={css.preloader}>
                {this.props.isFetching && <Preloader/>}
            </div>
            <FindUsers totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingProgress={this.props.followingProgress}
                       unfollowTC={this.props.unfollowTC}
                       followTC={this.props.followTC}

            />

        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage: state.findUsersPage.currentPage,
        isFetching: state.findUsersPage.isFetching,
        followingProgress: state.findUsersPage.followingProgress
    }


}


const FindUsersContainer = connect(mapStateToProps, {
    getUsersTC,
    unfollowTC,
    followTC
})(FindUsersAPIContainer)

export default FindUsersContainer