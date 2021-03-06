import { applyMiddleware, combineReducers, createStore } from "redux"
import authReducer from "./auth-reducer"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({                       //соединяем все Reducer в один, но по факту это НАШ СТЕЙТ
   profilePage: profileReducer,                  
   dialogsPage: dialogsReducer,
   sidebar: sidebarReducer,
   usersPage:usersReducer,
   auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))                   //потом все reducers передаем в store

export default store