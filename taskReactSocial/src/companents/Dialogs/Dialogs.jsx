import React from 'react'
import DialogItems from './DialogItems/DialogItems'
import s from './Dialogs.module.css'
import Message from './Message/Message'


const Dialogs = (props) => {

   let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItems name={d.name} key={d.id} id={d.id} img={d.img} />)
   let messagesElements = props.dialogsPage.messages.map(m => <Message text={m.text} key={m.id} id={m.id} who={m.who} />)

   let newMessage = React.createRef()

   let onSendMessage = () => {
      props.sendMessage()
   }

   let onMessageChange = (e) => {
      let text = e.target.value
      props.updateNewMessageText(text)
   }

   return (
      <div>
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>

            <div className={s.messages}>
               {messagesElements}
               <textarea onChange={onMessageChange}
                  className={s.text}
                  ref={newMessage}
                  value={props.dialogsPage.newMessageText}></textarea>
               <button onClick={onSendMessage}>Send</button>
            </div>
         </div>
      </div>

   )
}


export default Dialogs