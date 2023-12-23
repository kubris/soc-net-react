import React from "react";
import cls from './AddPost.module.css';
const AddPost = () => {
    return (
        <fieldset className={cls.postFormBlock}>
            <legend>My posts</legend>
            <form>
                <textarea className={cls.postMessage}
                          name="post-message"
                          rows="4" cols="50"
                          placeholder="your news...">
                </textarea>
                <button
                    className={cls.postFormSubmit}
                    type="submit">
                    Send
                </button>
            </form>
        </fieldset>
    );
}
export default AddPost;