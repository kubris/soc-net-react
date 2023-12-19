import React from "react";
import cls from "./OutComments.module.css";
import Comment from "./Comment/Comment";
const OutComments = (props) => {
    const messages = {
        "one": {
            "messageContent": {
                "text": "I must to beat The React! Spartaaa!!!",
                "likes":12
            },
            "publicatedDate": {
                "date": "16.12.2023",
                "time": "12:45"
            }
        },
        "two": {
            "messageContent": {
                "text": "I'm tearing my lessons to pieces! It's already the 16th!",
                "likes":18
            },
            "publicatedDate": {
                "date": "17.12.2023",
                "time": "16:27"
            }
        },
        "three": {
            "messageContent": {
                "text": "The React course strengthens your will! YOPTA!",
                "likes":23
            },
            "publicatedDate": {
                "date": "18.12.2023",
                "time": "14:44"
            }
        },
    }
    console.log(messages["1"]);
    return (
        <div className={cls.comments}>
            <Comment message={messages.one} />
            <Comment message={messages.two} />
            <Comment message={messages.three} />
        </div>
    );
}
export default OutComments;