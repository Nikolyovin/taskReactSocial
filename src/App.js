import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar  />
      <div className='app-wrapper-content'>
        <Routes>
          {/* /:userId? указываем что будем принимать парпаметры, например userId: 2 */}
          <Route path='/profile/:userId' element = { <ProfileContainer/> } />
          <Route path='/profile' element = { <ProfileContainer/> } />
          <Route path="/dialogs/*" element = { <DialogsContainer/> } />
          <Route path="/users/*" element = { <UsersContainer/> } />
          <Route path="/news/*" element = { <News/> } />
          <Route path="/music/*" element = { <Music/> } />
          <Route path="/settings/*" element = { <Settings/> } />
          <Route path="/login/*" element = { <LoginPage/> } />
        </Routes>
      </div>
    </div>
  )
}

export default App;
