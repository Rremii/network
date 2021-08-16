import Post from './Post/Post'
import css from './All_posts.module.css'
import React from 'react'
import PostsReduxForm from "./PostsForm/PostsForm";


let AllPosts = (props) => {


    let postData_element = props.profilePage.postData.map((p) => {
        return (
            <Post key={p.id} id={p.id} message={p.message} like={p.like}/>
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




