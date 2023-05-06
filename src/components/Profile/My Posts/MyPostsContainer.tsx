import React from 'react';
import {addPost, setUserProfile, updatePostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {compose} from "redux";

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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, updatePostText}))(MyPosts);

