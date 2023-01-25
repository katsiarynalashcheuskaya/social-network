import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {ActionsType, DialogPageType, sendMessageAC, updateMessageTextAC} from "../redux/state";

type DialogsType = {
    dialogs: DialogPageType
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsType) => {
    const sendMessage = () => props.dispatch(sendMessageAC())
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageTextAC(e.currentTarget.value))
    }

    let dialogsElements = props.dialogs.dialogs.map(el => <DialogItem key={el.id}
                    id={el.id}
                    name={el.name}
                    ava={el.ava}/>)
    let messagesElements = props.dialogs.messages.map(el => <Messages key={el.id}
                  id={el.id}
                  message={el.message}/>)

    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.textAndButton}>
                <textarea onChange={onMessageChange}
                          value={props.dialogs.newMessageText}
                          placeholder={'Enter your text'}>
                </textarea>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;