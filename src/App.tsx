import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsType, RootStateType} from "./components/redux/state";

type AppType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppType> = (props) => {
    const {state, dispatch} = props
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={state.sidebarBlock}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={()=>
                        <Profile profile={state.profilePage}
                                 dispatch={dispatch}
                        />}/>
                    <Route path='/dialogs' render={()=>
                        <Dialogs dialogs={state.dialogsPage}
                                 dispatch={dispatch}
                        />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
