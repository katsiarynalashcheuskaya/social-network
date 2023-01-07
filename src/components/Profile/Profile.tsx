import React from 'react';
import s from './Profile.module.css'
import background from './background.jpeg'
import MyPosts from "./My Posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.backgroundImg}
                     src={background}
                     alt='background img'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;