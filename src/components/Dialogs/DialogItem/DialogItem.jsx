import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogItem}>
            <img src={props.image} alt='avatar' />
            <span className={s.names}><NavLink to={path}> {props.name}</NavLink></span>
        </div>
    )
}

export default DialogItem;

