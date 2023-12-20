import React from "react";
import cls from './Message.module.css';
const Message = (props) => {
    return(
        <div>
            <div className={cls.message}>Hi</div>
            <div className={cls.message}>How are you?</div>
            <div className={cls.message}>What are you doing?</div>
        </div>
    )
}
export default Message;