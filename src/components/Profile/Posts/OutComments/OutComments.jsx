import React from "react";
import cls from "./OutComments.module.css";
import Comment from "./Comment/Comment";
const OutComments = (props) => {
    const commentData = [
        {   "id": 1,
            "messageContent": {
                "text": "I must to beat The React! Spartaaa!!!",
                "likes":12
            },
            "publicatedDate": {
                "date": "16.12.2023",
                "time": "12:45"
            }
        },
        {
            "id": 2,
            "messageContent": {
                "text": "I'm tearing my lessons to pieces! It's already the 16th!",
                "likes":18
            },
            "publicatedDate": {
                "date": "17.12.2023",
                "time": "16:27"
            }
        },
        {
            "id": 3,
            "messageContent": {
                "text": "The React course strengthens your will! YOPTA!",
                "likes":23
            },
            "publicatedDate": {
                "date": "18.12.2023",
                "time": "14:44"
            }
        },
    ]

    return (
        <div className={cls.comments}>
            <Comment message={commentData[0]} />
            <Comment message={commentData[1]} />
            <Comment message={commentData[2]} />
        </div>
    );
}
export default OutComments;