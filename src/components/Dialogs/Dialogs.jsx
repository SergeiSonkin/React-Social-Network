import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import '../../index';
import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}
                                   image={dialog.image} /> );
    let messagesElements = state.messages
        .map(message => <Message id={message.id} key={message.id} message={message.message} /> );

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageBody(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.sendMessage}>
                    <textarea placeholder="Enter your message" onChange={ onNewMessageChange }
                              ref={newMessageElement}
                              value={state.newMessageBody}/>
                    <button onClick={ onSendMessageClick }>
                        Send  Message
                    </button>
                </div>
                <div>{messagesElements}</div>
            </div>
        </div>
    )
}

export default Dialogs;

