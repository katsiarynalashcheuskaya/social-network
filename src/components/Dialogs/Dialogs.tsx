import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogPageType} from "../redux/state";

type DialogsType = {
    dialogs: DialogPageType
    addMessage: (textMessage: string) => void
}

const Dialogs = (props: DialogsType) => {
    const newDialogElement = React.createRef<HTMLTextAreaElement>();

    const addDialog = () => {
        if (newDialogElement.current) {
            let text = newDialogElement.current.value;
            props.addMessage(text)
            console.log(text)
        }
    }

    let dialogsElements = props.dialogs.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name} ava={el.ava}/>)
    let messagesElements = props.dialogs.messages.map(el => <Messages key={el.id} id={el.id} message={el.message}/>)

    return (
        <div className={s.dialogsBlock}>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
            <div className={s.textAndButton}>
                <textarea ref={newDialogElement}></textarea>
                <button onClick={addDialog}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;