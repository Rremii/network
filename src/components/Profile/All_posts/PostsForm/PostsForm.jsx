import css from "../All_posts.module.css";
import {maxLenght, required} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import React from "react";

let maxLenght100 = maxLenght(100)

const PostsForm = (props) => {

    return <>
        <form onSubmit={props.handleSubmit} className={css.Add_post}>
            <Field component={Textarea} name={'newPostText'} validate={[required, maxLenght100]}/>
            <button>Add post</button>
        </form>
    </>
}

const PostsReduxForm = reduxForm({form: 'Posts'})(PostsForm)
export default PostsReduxForm