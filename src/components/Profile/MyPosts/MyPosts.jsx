import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <div className={s.postsBlock}>
                <div className={s.addPost}>
                    <h4>My posts</h4>
                    <textarea placeholder="Enter your message" onChange={ updateNewPostText } ref={newPostElement}
                              value={props.newPostText} />
                    <button onClick={ onAddPost }>Add Post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
