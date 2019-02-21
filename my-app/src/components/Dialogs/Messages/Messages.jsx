import React from 'react'
import s from './Messages.module.css'
import Message from './Message/Message';




const Messages = (props) => {

    let messagesElements = props.messages.map( (m) => {
        return <Message messageText={m.messageText } />
      } );

    return(
        <div className = {s.messages}>
            {messagesElements}
        </div>
    )
}

export default Messages;