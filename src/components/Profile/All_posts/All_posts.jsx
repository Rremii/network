import Post from './Post/Post'
import css from './All_posts.module.css'
import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLenght, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const AllPosts = (props) => {

    let postData_element = props.profilePage.postData.map((p) => {
        return (
            <Post id={p.id} message={p.message} like={p.like}/>
        )
    })

    let addPost = (newPostText) => {
        return props.addPost(newPostText.newPostText)
    }


    return (
        <div className={css.wrapper}>

            <div className={css.all_block}>

                <PostsReduxForm onSubmit={addPost} className={css.Add_post}/>

                {postData_element}

            </div>
        </div>
    )
}

export default AllPosts
//validators
let maxLenght10 = maxLenght(10)
//
const PostsForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit} className={css.Add_post}>
            <Field component={Textarea} name={'newPostText'} validate={[required, maxLenght10]}/>
            <button>Add post</button>
        </form>
    </>
}

const PostsReduxForm = reduxForm({form: 'Posts'})(PostsForm)


/*
import Post from './Post/Post'
import css from './All_posts.module.css'
import React from 'react'


const AllPosts = (props) => {

    let postData_element = props.profilePage.postData.map((p) => {
        return (
            <Post id={p.id} message={p.message} like={p.like}/>
        )
    })


    let newPost = React.createRef();
    let addPost = () => {
        props.addPost() /!*this is the fun from bll*!/
    }


    let onPostChange = () => {
        let text = newPost.current.value
        props.updateNewPostText(text) /!*this is the fun from bll*!/
    }


    return (
        <div className={css.wrapper}>

            <div className={css.all_block}>


                {postData_element}


            </div>
        </div>
    )
}

export default AllPosts

const postsForm = (props) => {
    return <>
        <form className={css.Add_post}>
            <textarea onChange={onPostChange} ref={newPost} value={props.profilePage.newPostText}/>
            <button onClick={addPost}>Add post</button>
        </form>
    </>
}*/
