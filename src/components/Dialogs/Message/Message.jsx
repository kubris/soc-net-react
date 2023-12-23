import React from "react";
import cls from './Message.module.css';
import MessageItem from "./MessageItem/MessageItem";

const Message = (props) => {
    let messages = [
        { id: 1, text: 'Hi, bro!' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'What are you doing?' },
    ]

    let messagesElements = messages
        .map( m => <MessageItem text={m.text} />);

    return(
        <div className={cls.messages}>
            { messagesElements }
        </div>
    )
}
export default Message;