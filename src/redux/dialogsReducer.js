const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: 'Hi! I\'m John'},
        {id: 2, message: 'Hi! I\'m Akio'},
        {id: 3, message: 'Hi! I\'m William'},
        {id: 4, message: 'Hi! I\'m Pain'},
        {id: 5, message: 'Hi! I\'m Dude'},
        {id: 6, message: 'Hi! I\'m a Bird'},
        {id: 7, message: 'Hi! I\'m Johny'},
        {id: 8, message: 'Hi! I\'m Gaara'}
    ],
    dialogsData: [
        {id: 1, name: "John", image: 'https://images.unsplash.com/photo-1539664030485-a936c7d29c6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'},

        {id: 2, name: "Akio", image: 'https://images.unsplash.com/photo-1553736277-055142d018f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1958&q=80'},

        {id: 3, name: "William", image: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'},

        {id: 4, name: "Pain", image: 'https://images.unsplash.com/photo-1518992028580-6d57bd80f2dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80'},

        {id: 5, name: "Dude", image: 'https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80'},

        {id: 6, name: "a Bird", image: 'https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'},

        {id: 7, name: "Johny", image: 'https://images.unsplash.com/photo-1550853024-fae8cd4be47f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80'},

        {id: 8, name: "Gaara", image: 'https://images.unsplash.com/photo-1552727451-6f5671e14d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80'},
    ],
    newMessageBody: "hello",
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: ' ',
                messages: [ ...state.messages, {id: 6, message: body} ]
            }
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageBody: action.body
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, body: text })

export default dialogsReducer;