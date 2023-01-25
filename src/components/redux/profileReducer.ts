import {ActionsType, ProfilePageType} from "./state";

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

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

    if (action.type === 'ADD-POST') {
        state.posts.push({id: new Date().getTime(), message: state.newPostText, likesCount: 0})
        state.newPostText = ''
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;
    }

    return state
}

export default profileReducer;