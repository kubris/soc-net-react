import React from "react";
import cls from "./OutComments.module.css";
import Comment from "./Comment/Comment";
const OutComments = () => {
    return (
        <div className={cls.comments}>
            <Comment />
            <Comment />
        </div>
    );
}
export default OutComments;