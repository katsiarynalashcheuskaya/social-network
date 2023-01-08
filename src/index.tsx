import React from 'react';
import './index.css';
import state, {subscribe} from './components/redux/state'
import {addMessage, addPost, updateNewPostText} from "./components/redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
subscribe(rerenderEntireTree)
