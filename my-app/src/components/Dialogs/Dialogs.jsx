import React from 'react';
import s from "./Dialogs.module.css"
import DialogsContactsBlock from './DialogsContactsBlock/DialogsContactsBlock';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    return (
        <div className={s.dialogWrapper}>
            <DialogsContactsBlock dialogContact = {props.dialogsPage.dialogContact} />
            <div className={s.delimiter}></div>
            <Messages messages = {props.dialogsPage.messages} />
        </div>
    )
} 

export default Dialogs;