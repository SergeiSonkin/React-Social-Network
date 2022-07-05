// import ava1 from '../images/ava1.jpg';
// import ava2 from '../images/ava2.jpg';
// import ava3 from '../images/ava3.png';
// import ava4 from '../images/ava4.jpg';
// import ava5 from '../images/ava5.png';
// import ava6 from '../images/ava6.jpg';
// import ava7 from '../images/ava7.png';
// import ava8 from '../images/ava8.jpg';
// import ava9 from '../images/ava9.png';
// import {observe} from "web-vitals/dist/modules/lib/observe";
// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer";
//
//
// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
//
// const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
//
// let store = {
//     _state: {
//         // profilePage:
//         dialogsPage: {
//
//         },
//         sidebar: {
//             friendsData: [
//                 {id: 1, name: "John", image: 'ava1'},
//                 {id: 2, name: "William", image: 'ava2'},
//                 {id: 3, name: "Pain", image: 'ava3'},
//             ],
//
//         },
//     },
//     _callSubscriber() {
//         console.log("State changed");
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) { // { type: 'ADD-POST' }
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber();
//     }
// }
//
//
//
//
//
// export default store;
// window.store = store;
// // store - OOP