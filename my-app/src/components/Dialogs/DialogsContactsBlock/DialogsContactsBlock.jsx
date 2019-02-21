import React from 'react';
import s from './DialogsContactsBlock.module.css'
import DialogContact from './DialogContact/DialogContact';



const DialogsContactsBlock = (props) => {

    let dialogContactsElements = props.dialogContact.map( (d) => {
        return <DialogContact user ={d.userName} key={d.id} id={d.id} />
      } );

    return (
        <div className={s.dialogs}>
            {dialogContactsElements}   
        </div>
    )
}

export default DialogsContactsBlock;