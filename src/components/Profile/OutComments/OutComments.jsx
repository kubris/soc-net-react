import React from "react";
import cls from "./OutComments.module.css";
import Comment from "./Comment/Comment";
const OutComments = (props) => {
    let commentsElements = props.commentsData
        .map( c => <Comment message={c} key={c.id}/>);

    return (
        <div className={cls.comments}>
            { commentsElements }
        </div>
    );
}
export default OutComments;