import React from 'react';
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../redux/state";

type ProfileType = {
    profile: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profile={props.profile} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;