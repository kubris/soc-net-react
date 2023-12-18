import React from "react";
import cls from './Comment.module.css';
import Text from './Text/Text';
import Avatar from "./Avatar/Avatar";
const Comment = () => {
    return (
        <div className={cls.comment}>
            <div className={cls.times}>Andrey M.</div>
            <div className={cls.content}>
                <Avatar />
                <Text />
            </div>
            <div className={cls.times}>16.12.2023<br />12:45</div>
        </div>
    );
}
export default Comment;