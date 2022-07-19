import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import userPhoto from '../../assets/images/images.png'

const Header = ({ isAuth, login, photo }) => {
   return (
      <header className = { s.header }>
         <img  className = { s.logo } src = "https://cdn.logo.com/hotlink-ok/logo-social.png" />
         <div className = { s.loginBlock } >
            { isAuth ? 
               <img src ={ !photo ? userPhoto : photo } className = { s.userPhoto } /> :
               <></>
            }
            { isAuth ? login : <NavLink to = { '/login' }> Login </NavLink> }
         </div>
      </header>
   )
}

export default Header