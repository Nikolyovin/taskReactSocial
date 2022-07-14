import { combineReducers, createStore } from "redux"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"



let reducers = combineReducers({                       //соединяем все Reducer в один, но по факту это НАШ СТЕЙТ
   profilePage: profileReducer,                  
   dialogsPage: dialogsReducer,
   sidebar: sidebarReducer,
   usersPage:usersReducer
})

let store = createStore(reducers)                   //потом все reducers передаем в store

export default store