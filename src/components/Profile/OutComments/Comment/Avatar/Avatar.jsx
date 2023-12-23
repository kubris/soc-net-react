import React from "react";
import Admin from "../../../../../images/developer.jpg";
import cls from './Avatar.module.css';
const Avatar = (props) => {
    return (
        <div className={cls.block}>
            <img className={cls.avatar} src={Admin} alt="Admin" />
            <div className={cls.times}>{props.message.date}</div>
            <div className={cls.times}>{props.message.time}</div>
        </div>
    );
}
export default Avatar;