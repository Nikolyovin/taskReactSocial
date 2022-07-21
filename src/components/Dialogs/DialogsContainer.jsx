import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
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
// с помощью compose оборачиваем Dialogs в withAuthRedirect, и все вместе в connect
export default  compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)