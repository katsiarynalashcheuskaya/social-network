import React from 'react';
import {sendMessage, updateMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        dialogsPage: state.dialogsPage,
    }
}
/*let mapDispatchToProps = (dispatch: (action: ActionsType) =>  void) => {
    return {
        sendMessage: () => {dispatch(sendMessage())},
        updateMessageText: (text: string) => {dispatch(updateMessageText(text))
    }
    }
}*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage, updateMessageText}),
    withAuthRedirect
)(Dialogs);