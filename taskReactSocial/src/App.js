import React from 'react';
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './companents/Header/Header';
import Navbar from './companents/Navbar/Navbar';
import Profile from './companents/Profile/Profile';
import News from './companents/News/News';
import Music from './companents/Music/Music';
import Settings from './companents/Settings/Settings';
import DialogsContainer from './companents/Dialogs/DialogsContainer';
import UsersContainer from './companents/Users/UsersContainer';





const App = (props) => {
  
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar  />
      <div className='app-wrapper-content'>
        <Routes>

          <Route path="/profile/*" element={
            <Profile/>
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
