import React from "react";
import PostImg from "../../../images/post-bg.jpg";
import cls from './ProfileImg.module.css';
const ProfileImg = () => {
    return (
        <div className={cls.postImg}>
            <img src={PostImg} alt="Post"/>
        </div>
    );
}
export default ProfileImg;