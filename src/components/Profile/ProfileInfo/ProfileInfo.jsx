import React from "react";
import cls from './ProfileInfo.module.css';
import UnknownUser from "../../../images/unknown.jpg";
import ManUser from "../../../images/man.jpg";
import WomanUser from "../../../images/woman.jpg";
import Admin from "../../../images/developer.jpg";
const ProfileInfo = () => {
    let hasImage= 0;
    return (
        <div className={cls.postInfo}>
            <div className={cls.postInfoAvatar}>
                {hasImage === 1 ? <img src={ManUser} alt="Man user" /> :
                    hasImage === 2 ? <img src={WomanUser} alt="Woman user" /> :
                        hasImage === 3 ? <img src={UnknownUser} alt="Unknown user" /> :
                            <img src={Admin} alt="Admin" />
                }
            </div>
            <div className={cls.postInfoText}>
                <div className={cls.postInfoName}>
                    Andrey M.
                </div>
                <div className={`${cls.postInfoField} ${cls.postInfoBorned}`}>
                    <span>Date of Birth:</span> 8 january
                </div>
                <div className={`${cls.postInfoField} ${cls.postInfoCity}`}>
                    <span>City:</span> SnK
                </div>
                <div className={`${cls.postInfoField} ${cls.postInfoEducation}`}>
                    <span>Education:</span> KubGTU
                </div>
                <div className={`${cls.postInfoField} ${cls.postInfoWebsite}`}>
                    <span>Web Site:</span> https://kubris.github.io/portfolio/
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;