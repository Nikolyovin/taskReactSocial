
import s from './Message.module.css';
import './Message.css';

const Message = (props) => {
   return (
      <div className={s.wrap}>
         <div className={props.who}>{props.text}</div>
      </div>)
}

export default Message