import s from './Sidebar.module.css';
import SidebarItems from './SidebarItems/SidebarItems';

const Sidebar = (props) => {
   let sidebarElements = props.friends.map(el => <SidebarItems name={el.name} id={el.id} img={el.img} />)

   return (
      <div className={s.wrap}>
         <span className={s.Title}>Friend</span>
         <div className={s.friends_item}>
            {sidebarElements}
         </div>
      </div>
   )
}

export default Sidebar;