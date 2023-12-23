import React from "react";
import cls from './../Message.module.css';
const MessageItem = (props) => {
    return (
        <div className={cls.message}>{props.text}</div>
    )
}
export default MessageItem;