import React from "react";
import cls from './MessageItem.module.css';
import UnknownImg from "../../../../images/unknown.jpg";
//import AdminImg from "../../../../images/developer.jpg";
const MessageItem = (props) => {
    return (
        <div className={cls.messageItem}>
            <img src={UnknownImg} alt="Avatar"/>
            {props.text}
        </div>
    )
}
export default MessageItem;