import {combineReducers, createStore} from "redux";
import profileReducer, {addPost, setUserProfile, updatePostText} from "./profileReducer";
import dialogsReducer, {sendMessage, updateMessageText} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "./usersReducer";

export type ActionsType =
    ReturnType<typeof addPost> | ReturnType<typeof updatePostText> |
    ReturnType<typeof updateMessageText> | ReturnType<typeof sendMessage> |
    ReturnType<typeof follow> | ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> | ReturnType<typeof setIsFetching> |
    ReturnType<typeof setUserProfile>


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        sidebarBlock: sidebarReducer
    }
)

export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers);
/*window.store = store;*/

export default store