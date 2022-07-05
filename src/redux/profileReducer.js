const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi! How are u doing?(1)", likesCount: 12},
        {id: 2, message: "Hi! How are u doing?(2)", likesCount: 13},
        {id: 3, message: "Hi! How are u doing?(3)", likesCount: 14},
        {id: 4, message: "Hi! How are u doing?(4)", likesCount: 15},
        {id: 5, message: "Hi! How are u doing?(5)", likesCount: 16},
        {id: 6, message: "Hi! How are u doing?(6)", likesCount: 17},
        {id: 7, message: "Hi! How are u doing?(7)", likesCount: 18},
        {id: 8, message: "Hi! How are u doing?(8)", likesCount: 19},
    ],
    newPostText: "Write your message!",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let text = state.newPostText;
            
            let newPost = {
                id: Math.random() * 10,
                message: text,
                likesCount: Math.floor(Math.random() * 10)
            }
            return {
                ...state,
                newPostText: '',
                posts: [ ...state.posts, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }

}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;