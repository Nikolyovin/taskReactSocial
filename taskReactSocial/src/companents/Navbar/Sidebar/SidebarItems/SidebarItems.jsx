import s from './SidebarItems.module.css';

const SidebarItems = (props) => {
   return (
      <div className={s.wrap}>
         <img className={s.avatar} src={props.img} />
         <span className={s.name}>{props.name}</span>
      </div >
   )
}

export default SidebarItems;