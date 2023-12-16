import React from "react";
import PostImg from "../images/post-bg.jpg";
import UnknownUser from "../images/unknown.jpg";
import ManUser from "../images/man.jpg";
import WomanUser from "../images/woman.jpg";
import Admin from "../images/developer.jpg";
import cls from './Post.module.css';
const Post = () => {
    const hasImage= 0;
    return (
        <section className={cls.post}>
            <div className={cls.postImg}>
                <img src={PostImg} alt="Post Image"/>
            </div>
            <div className={cls.postInfo}>
                <div className={cls.postInfoAvatar}>
                    {hasImage === 1 ? <img src={ManUser} alt="Man user" /> :
                        hasImage === 2 ? <img src={WomanUser} alt="Woman user" /> :
                            hasImage === 3 ? <img src={UnknownUser} alt="Unknown user" /> :
                                <img src={Admin} alt="Admin" />
                    }
                </div>
                <div className={cls.postInfoText}>
                    <div className={cls.postInfoName}>
                        Andrey M.
                    </div>
                    <div className={`${cls.postInfoField} ${cls.postInfoBorned}`}>
                        <span>Date of Birth:</span> 8 january
                    </div>
                    <div className={`${cls.postInfoField} ${cls.postInfoCity}`}>
                        <span>City:</span> SnK
                    </div>
                    <div className={`${cls.postInfoField} ${cls.postInfoEducation}`}>
                        <span>Education:</span> KubGTU
                    </div>
                    <div className={`${cls.postInfoField} ${cls.postInfoWebsite}`}>
                        <span>Web Site:</span> https://kubris.github.io/portfolio/
                    </div>
                </div>
            </div>
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
            <div className={cls.postComment}>
                {hasImage === 1 ? <img src={ManUser} alt="Man user" /> :
                    hasImage === 2 ? <img src={WomanUser} alt="Woman user" /> :
                        hasImage === 3 ? <img src={UnknownUser} alt="Unknown user" /> :
                            <img src={Admin} alt="Admin" />
                }
                <div>
                    <p>
                        I must to beat The React! Spartaaa!!!
                    </p>
                </div>

            </div>
        </section>
    );
}
export default Post;