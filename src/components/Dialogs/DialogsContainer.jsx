import React from 'react'
import { connect } from 'react-redux'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'


let mapStateToProps=(state) => {                                     //функция редаксовская
   return {
      dialogsPage: state.dialogsPage,                                //даем доступ в стейт
      isAuth: state.auth.isAuth
   }
}

let mapDispatchToProps=(dispatch) => {                               //доступ в диспатч и передаем в пропсы
   return {
      updateNewMessageText:(text) => {
         dispatch(updateNewMessageTextActionCreator(text))
      },
      sendMessage:() => {
         dispatch(addMessageActionCreator())
      }
   }
}

const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(Dialogs)                   //указываем Dialogs, чтобы создать для него контейнерную компоненту и в скобках передаем функции которые потом войдут в пропсы

export default DialogsContainer