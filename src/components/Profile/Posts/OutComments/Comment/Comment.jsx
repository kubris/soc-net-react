import React from "react";
import cls from './Comment.module.css';
import Text from './Text/Text';
import Avatar from "./Avatar/Avatar";
const Comment = (props) => {
    return (
        <div className={cls.comment}>
            <div className={cls.content}>
                <Avatar message={props.message.publicatedDate} />
                <Text message={props.message.messageContent} />
            </div>
        </div>
    );
}
export default Comment;