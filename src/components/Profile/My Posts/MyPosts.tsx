import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsType, addPostAC, ProfilePageType, UpdatePostTextAC} from "../../redux/state";

type MyPostsType = {
    profile: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsType) => {
    const postsElements = props.profile.posts.map(el =>
        <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount}/>)

    const addNewPostHandler = () => props.dispatch(addPostAC());

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdatePostTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <div className={s.newPostArea}>
                    <textarea onChange={onPostChange} value={props.profile.newPostText}/>
                    <button onClick={addNewPostHandler}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;