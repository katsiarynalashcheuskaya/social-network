import {ActionsType} from "./redux-store";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const initialState:ProfilePageType =  {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 2},
        {id: 3, message: 'Fineeeee', likesCount: 3},
        {id: 4, message: 'Hohohohoho', likesCount: 4},
        {id: 5, message: 'Qaaaaaqqqq', likesCount: 8}
    ],
    newPostText: ''
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            state.posts.push({id: new Date().getTime(), message: state.newPostText, likesCount: 0})
            state.newPostText = ''
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


    export const addPostAC = () => ({type: "ADD-POST"} as const)
    export const updatePostTextAC = (newText: string) => ({
        type: "UPDATE-NEW-POST-TEXT", newText: newText
    } as const)


export default profileReducer;