import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.descriptionBlock__image}>
                    <img src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"></img>
                </div>
                <div className={s.descriptionBlock__info}>
                    <h3>Some bird</h3>
                    <p>Hi there! I'm a bird...</p>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;