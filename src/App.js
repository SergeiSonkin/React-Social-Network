import './App.css'
import './index.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import {Route, Routes, Link} from "react-router-dom";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from './components/Users/Users'
const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs/*"
                           element={<DialogsContainer />} />

                    <Route path="/profile"
                           element={<Profile  /> } />

                    <Route path="/users"
                            element={<UsersContainer />} />

                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/friends" element={<Friends />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
