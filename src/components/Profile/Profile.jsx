import React from "react";
import cls from './Profile.module.css';
import ProfileImg from './ProfileImg/ProfileImg';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import AddPost from './Posts/AddPost/AddPost';
import OutComments from './Posts/OutComments/OutComments';
const Profile = () => {
    return (
        <section className={cls.post}>
            <ProfileImg/>
            <ProfileInfo/>
            <AddPost/>
            <OutComments/>
        </section>
    );
}
export default Profile;