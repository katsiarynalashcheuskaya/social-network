import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, updatePostTextAC} from "./profileReducer";
import dialogsReducer, {sendMessageAC, updateMessageTextAC} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

export type ActionsType =
    ReturnType<typeof addPostAC> | ReturnType<typeof updatePostTextAC> |
    ReturnType<typeof updateMessageTextAC> | ReturnType<typeof sendMessageAC>


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebarBlock: sidebarReducer
    }
)

export type AppStateType = ReturnType<typeof reducers>


let store = createStore(reducers);

export default store