import React from "react";
import cls from './Message.module.css';
const MessageItem = (props) => {
    return (
        <div className={cls.message}>{props.text}</div>
    )
}
const Message = (props) => {

    let messagesData = [
        { id: 1, text: 'Hi, bro!' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'What are you doing?' },
    ]

    return(
        <div>
            <MessageItem text={messagesData[0].text} />
            <MessageItem text={messagesData[1].text} />
            <MessageItem text={messagesData[2].text} />
        </div>
    )
}
export default Message;