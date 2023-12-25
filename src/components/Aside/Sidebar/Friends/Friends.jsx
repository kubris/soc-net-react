import React from "react";
import cls from './Friends.module.css';
import FriendOnline from "./FriendOnline/FriendOnline";

const Friends = (props) => {
    let friendsOnline = props.state.friendsOnline
        .map( f => <FriendOnline name={f.name} id={f.id} />);
    return (
        <div className={cls.friends}>
            <h3>Friends online</h3>
            <ul className={cls.friendsList}>
                { friendsOnline }
            </ul>
        </div>
    );
}
export default Friends;