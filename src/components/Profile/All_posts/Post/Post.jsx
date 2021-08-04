import css from './Post.module.css'

const Post = (props) => {
    return (
        <div className={css.post}>
            <img className={css.ico} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"/> {props.message}
            <div>like: {props.like}</div>
        </div>
    )
}
export default Post