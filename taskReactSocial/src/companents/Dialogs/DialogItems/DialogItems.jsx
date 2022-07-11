import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItems = (props) => {
   let path = "/dialogs/" + props.id      /* выносим отдельно путь в переменную для navlink*/

   return (
      <div className={s.dialog + ' ' + s.active}>
         <div className={s.dialog_item}>
            <img className={s.avatar} src={props.img} />
            <NavLink className={s.dialog_link} to={path}> {props.name} </NavLink>
         </div>
      </div >
   )
}



export default DialogItems