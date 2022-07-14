import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar  />
      <div className='app-wrapper-content'>
        <Routes>

          <Route path="/profile/*" element={
            <ProfileContainer/>
          }/>
          
          <Route path="/dialogs/*" element={
            <DialogsContainer />} 
          />

          <Route path="/users/*" element={
            <UsersContainer />} 
          />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;