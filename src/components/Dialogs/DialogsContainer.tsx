import React from 'react';
import {sendMessageAC, updateMessageTextAC} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../redux/redux-store";

/*const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
        (store)=> {
            const sendMessage = () => store.dispatch(sendMessageAC())
            const updateMessageText = (text: string) => {
                store.dispatch(updateMessageTextAC(text))
            }
            return <Dialogs updateMessageText={updateMessageText}
                            sendMessage={sendMessage}
                            dialogsPage={store.getState().dialogsPage}/>
        }
    }
        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) =>  void) => {
    return {
        sendMessage: () => {dispatch(sendMessageAC())},
        updateMessageText: (text: string) => {dispatch(updateMessageTextAC(text))
    }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;