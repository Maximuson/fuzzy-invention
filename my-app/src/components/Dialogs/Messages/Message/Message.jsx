import React from 'react';
import s from './Message.module.css';

const Message = (props) => {

    return(
        <div className={s.wrapper}>
            <p>{props.messageText}</p>
        </div>
    )
}

export default Message;