import React from "react";
import cls from './ProfileInfo.module.css';
import Admin from "../../../images/developer.jpg";
import Beauty from "../../../images/beauty.jpg";
const ProfileInfo = (props) => {
    return (
        <div className={cls.postInfo}>
            <div className={cls.postInfoAvatar}>
                <img src={props.infoData.avatar === "Admin" ? Admin : Beauty} alt="Admin" />
            </div>
            <div className={cls.postInfoText}>
                <div className={cls.postInfoName}> {props.infoData.name}</div>
                <div className={`${cls.postInfoField} ${cls.postInfoBorned}`}>
                    <span>Date of Birth:</span>{props.infoData.borned}
                </div>
                <div className={`${cls.postInfoField} ${cls.postInfoCity}`}>
                    <span>City:</span>{props.infoData.city}
                </div>
                <div className={`${cls.postInfoField} ${cls.postInfoEducation}`}>
                    <span>Education:</span>{props.infoData.edu}
                </div>
                <div className={`${cls.postInfoField} ${cls.postInfoWebsite}`}>
                    <span>Web Site:</span>{props.infoData.webSite}
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;