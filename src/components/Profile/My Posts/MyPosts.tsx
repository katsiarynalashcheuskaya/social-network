import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.appWrapperContent}>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post message='Hiiiii' likesCount={1}/>
                <Post message='How are you?' likesCount={2}/>
                <Post message='Okkkk' likesCount={3}/>
            </div>
        </div>
    );
};

export default MyPosts;