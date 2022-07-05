import React from 'react'
import s from './Users.module.css'
import  userPhoto  from '../../assets/images/user.png'
const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.container}>
            <div className={s.currentPage}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.user}>
                        <div className="user__image">
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </div>


                        <div className="user__nameAndStatus">
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>

                        <div className="user__subscribeButton">
                            {u.followed
                                ? <button onClick={() => {
                                    props.unsubscribe(u.id)
                                }}>
                                    Unsubscribe</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>
                                    Follow</button>}
                        </div>
                    </div>

                    {/* <div>{"u.location.country"}</div> */}
                    {/* <div>{"u.location.city"}</div> */}
                </div>)
            }
        </div>
    )
}

export default Users