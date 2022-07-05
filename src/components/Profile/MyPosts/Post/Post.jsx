import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
        <div className={s.item__container}>
            <div className={s.itemContainer__image}>
                <img src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="avatar" />
            </div>
            <div className={s.itemContainer__message}>
                {props.message}
            </div>
        </div>

        <div className={s.like__container}>
            <button>Like</button> <span className={s.like}>{ props.likesCount }</span>
        </div>
    </div>
  )
}

export default Post;