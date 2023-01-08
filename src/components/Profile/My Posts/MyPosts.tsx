import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../redux/state";

type MyPostsType = {
    profile: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {
    const postsElements = props.profile.posts.map(el =>
        <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount}/>)

    const addNewPostHandler = () => {
        props.addPost();
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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