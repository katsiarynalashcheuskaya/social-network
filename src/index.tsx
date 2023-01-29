import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./components/redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {ProfilePageType} from "./components/redux/profileReducer";
import {DialogPageType} from "./components/redux/dialogsReducer";
import {SidebarBlockType} from "./components/redux/sidebarReducer";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'))
}

rerenderEntireTree()
store.subscribe(()=>{rerenderEntireTree();
})

export type SidebarType = {
    id: number
    name: string
    ava: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebarBlock: SidebarBlockType
}