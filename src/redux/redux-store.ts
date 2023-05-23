import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {addPost, setStatus, setUserProfile, updatePostText} from "./profileReducer";
import dialogsReducer, {sendMessage, updateMessageText} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {
    unFollowSuccess,
    setCurrentPage,
    setIsFetching, setIsFollowingInProgress,
    setTotalUsersCount,
    setUsers,
    followSuccess
} from "./usersReducer";
import authReducer, {setAuthUserData} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

export type ActionsType =
    ReturnType<typeof addPost> | ReturnType<typeof updatePostText> |
    ReturnType<typeof updateMessageText> | ReturnType<typeof sendMessage> |
    ReturnType<typeof followSuccess> | ReturnType<typeof unFollowSuccess> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> | ReturnType<typeof setIsFetching> |
    ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData> |
    ReturnType<typeof setIsFollowingInProgress> | ReturnType<typeof setStatus>


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        sidebarBlock: sidebarReducer,
        auth: authReducer,
        form: formReducer
    }
)

export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
/*window.store = store;*/

export default store