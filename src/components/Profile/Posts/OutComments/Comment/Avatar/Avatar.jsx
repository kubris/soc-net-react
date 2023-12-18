import React from "react";
import Admin from "../../../../../../images/developer.jpg";
import cls from './Avatar.module.css';
const Avatar = () => {
    return (
        <div className={cls.avatar}>
            <img src={Admin} alt="Admin" />
        </div>
    );
}
export default Avatar;