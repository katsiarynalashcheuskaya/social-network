import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {setIsFetching} from "./usersReducer";
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 2},
        {id: 3, message: 'Fineeeee', likesCount: 3},
        {id: 4, message: 'Hohohohoho', likesCount: 4},
        {id: 5, message: 'Qaaaaaqqqq', likesCount: 8}
    ],
    newPostText: '',
    profile: null,
    status: 'initial status'
}

/*export type ProfileType = {
    photos: string | null,
    status: string | number
}*/

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: string | null,
    status: string
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: new Date().getTime(), message: state.newPostText, likesCount: 0}
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET-STATUS":
            console.log(action)
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPost = () => ({type: "ADD-POST"} as const)

export const updatePostText = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT", newText: newText
} as const)

export const setUserProfile = (profile: string | null) => ({
    type: "SET-USER-PROFILE", profile
} as const)

export const setStatus = (status: string) => ({
    type: "SET-STATUS", status
} as const)

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setIsFetching(true));
        usersAPI.getProfile(userId).then(response =>{
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatus = (userId: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setIsFetching(true));
        profileAPI.getStatus(userId).then(response =>{

            dispatch(setStatus(response.data))
        })


    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setIsFetching(true));
        profileAPI.updateStatus(status).then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                console.log(response)
                dispatch(setStatus(status));
            }
        })
    }
}


export default profileReducer;