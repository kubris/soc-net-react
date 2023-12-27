import React from "react";
import cls from './Profile.module.css';
import ProfileImg from './ProfileImg/ProfileImg';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import AddPost from './AddPost/AddPost';
import OutComments from './OutComments/OutComments';
const Profile = (props) => {
    return (
        <section className={cls.post}>
            <ProfileImg />
            <ProfileInfo infoData={props.state.userInfo[0]} />
            <AddPost addPost={props.addPost} />
            <OutComments commentsData={props.state.comments} />
        </section>
    );
}
export default Profile;