import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./components/redux/state";

type AppType = {
    state: RootStateType
    addPost: () => void
    addMessage: (textMessage: string) => void
    updateNewPostText: (newText: string) => void
}

function App(props:AppType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props.state.sidebarBlock}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={()=>
                        <Profile profile={props.state.profilePage}
                                 addPost={props.addPost}
                                 updateNewPostText={props.updateNewPostText}
                        />}/>
                    <Route path='/dialogs' render={()=>
                        <Dialogs dialogs={props.state.dialogsPage}
                                 addMessage={props.addMessage}
                        />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
