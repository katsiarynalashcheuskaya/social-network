import React from 'react';
import s from './ProfileInfo.module.css'
import background from './ttt.webp'

const ProfileInfo = () => {
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
        </div>
    );};

export default ProfileInfo;