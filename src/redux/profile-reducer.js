import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {                                        //в каждом редйюсере свой initialState
   posts: [
      { id: 1, message: 'Hello, yow are you?', likesCount: 15 },
      { id: 2, message: "It's my first post", likesCount: 20 },
      { id: 3, message: 'Blabla', likesCount: 15 },
      { id: 4, message: 'dadadad', likesCount: 15 },
   ],
   newPostText: 'it-kamasutra.com',
   profile: null,
   status: ""
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,                                                       //чтобы зименить state мы делаем копию объекта
            posts:[...state.posts, {id:5, message: state.newPostText, likesCount: 0}], //и копируем сам массив posts, в который хотим запушить и пушим
            newPostText: '',   
         }                
         
      case UPDATE_NEW_POST_TEXT:                 
         return {
            ...state,                                      //делаем копию 
            newPostText:action.newText                     //добавляем введенный текст
         }                              
         
      case SET_USER_PROFILE:
         return {
            ...state,                                      
            profile:action.profile                     
         } 
         case SET_STATUS:
         return {
            ...state,                                      
            status:action.status                     
         } 

      default:                                          //дефолтный кейс, если не найдется такого экшена
         return state
   }

}

export const addPostActionCreator = () => ({ type: ADD_POST })    //экспортируем экшн, где в типе ADD_POST, который потом придет в редюсер
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => {
   return (dispatch) => {
      usersAPI.getProfile(userId).then((response) => {      //отправляем get запрос на сервак .then(response(когда запрос выполниться пишем логику что нужно сделать)
         dispatch(setUserProfile(response.data))
       })
   }
}

export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getStatus(userId).then((response) => {      //отправляем get запрос на сервак .then(response(когда запрос выполниться пишем логику что нужно сделать)
         dispatch(setStatus(response.data))
       })
   }
}

export default profileReducer

