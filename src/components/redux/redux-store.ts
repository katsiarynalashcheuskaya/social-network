import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, updatePostTextAC} from "./profileReducer";
import dialogsReducer, {sendMessageAC, updateMessageTextAC} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "./usersReducer";

export type ActionsType =
    ReturnType<typeof addPostAC> | ReturnType<typeof updatePostTextAC> |
    ReturnType<typeof updateMessageTextAC> | ReturnType<typeof sendMessageAC> |
    ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> |
     ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> |
     ReturnType<typeof setTotalUsersCountAC>


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