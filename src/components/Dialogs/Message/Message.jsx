import React from "react";
import cls from './Message.module.css';
import MessageItem from "./MessageItem/MessageItem";

const Message = (props) => {

    let messagesElements = props.messages
        .map( m => <MessageItem text={m.text} />);

    return(
        <div className={cls.messages}>
            { messagesElements }
        </div>
    )
}
export default Message;