import React from 'react'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'


let mapStateToProps=(state) => {                                     //функция редаксовская
   return {
      dialogsPage: state.dialogsPage                                //даем доступ в стейт
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

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)                   //указываем Dialogs, чтобы создать для него контейнерную компоненту и в скобках передаем функции которые потом войдут в пропсы

export default DialogsContainer