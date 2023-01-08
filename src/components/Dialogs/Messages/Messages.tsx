import React from 'react';
import s from '../Dialogs.module.css'
import {MessageType} from "../../redux/state";

const Messages = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

export default Messages;