import React from "react";
import cls from './AddPost.module.css';
const AddPost = () => {

    let newPostElement = React.createRef();

    let addPostEl = () => {
        alert(newPostElement.current.value);
    }

    return (
        <fieldset className={cls.postFormBlock}>
            <legend>My posts</legend>
            <form>
                <textarea
                    ref={ newPostElement }
                    className={cls.postMessage}
                    name="post-message"
                    rows="4" cols="50"
                    placeholder="your news...">
                </textarea>
                <button onClick={ addPostEl } className={cls.postFormSubmit} >
                    Send
                </button>
            </form>
        </fieldset>
    );
}
export default AddPost;