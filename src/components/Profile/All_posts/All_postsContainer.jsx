import {addPost} from "../../../Redux/ProfileReducer";
import AllPosts from "./All_posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        profilePage: state.profilePage,

    }
}


const AllPostsContainer = connect(mapStateToProps, {addPost})(AllPosts);

export default AllPostsContainer
