import React from 'react';
import '../../index';
import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// state = store.getState()
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
// dispatch = store.dispatch.bind(store)
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            let action = updateNewMessageBodyCreator(body);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;

