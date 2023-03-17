import React from 'react';
import {addPost, setUserProfile, updatePostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
/*let mapDispatchToProps = (dispatch: (action: ActionsType) =>  void) => {
    return {
        addPost: () => dispatch(addPost()),
        updatePostText: (text: string) => {dispatch(updatePostText(text))
        }
    }
}*/



const MyPostsContainer = connect(mapStateToProps, {addPost, updatePostText})(MyPosts);

export default MyPostsContainer;