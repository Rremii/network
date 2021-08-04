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
        props.addPost() /*this is the fun from bll*/
    }


    let onPostChange = () => {
        let text = newPost.current.value
        props.updateNewPostText(text) /*this is the fun from bll*/
    }


    return (
        <div className={css.wrapper}>

            <div className={css.all_block}>
                <div className={css.Add_post}>
                    <textarea onChange={onPostChange} ref={newPost} value={props.profilePage.newPostText}/>
                    <button onClick={addPost}>Add post</button>
                </div>

                {postData_element}


            </div>
        </div>
    )
}

export default AllPosts
