import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store, {RootStateType} from "./components/redux/state";

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    )}

rerenderEntireTree(store.getState())
    store.subscribe(()=>rerenderEntireTree(store._state))
