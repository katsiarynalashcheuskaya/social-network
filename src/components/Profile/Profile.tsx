import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className="app-wrapper-content">
            <div>
                <img className='backgroundImg'
                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png'
                     alt='fhgjbhkjnl'/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default Profile;