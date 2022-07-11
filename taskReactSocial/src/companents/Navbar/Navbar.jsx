
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import Sidebar from './Sidebar/Sidebar';
import SidebarContainer from './Sidebar/SidebarContainer';

const Navbar = (props) => {
   return (
      <div className={s.wrap}>
         <nav className={s.nav}>
            <div>
               <NavLink to='/profile' className={(navData) => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div >
               <NavLink to='/dialogs' className={(navData) => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div >
               <NavLink to='/users' className={(navData) => navData.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
               <NavLink to='/news' className={(navData) => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
               <NavLink to='/music' className={(navData) => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
               <NavLink to='/settings' className={(navData) => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
         </nav>


         <SidebarContainer/>

      </div>
   )

}

export default Navbar;