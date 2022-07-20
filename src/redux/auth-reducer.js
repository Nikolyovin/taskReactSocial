import { authAPI, usersAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO'

let initialState = {                                        //в каждом редйюсере свой initialState
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   photo: null
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true
         }

      case SET_PROFILE_PHOTO:
         return {
            ...state,
            ...action.photo
         }



      default:                                          //дефолтный кейс, если не найдется такого экшена
         return state
   }

}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })    //экспортируем экшн c userId(чтобы было понятно на кого подпичываться), который потом придет в редюсер
export const setProfilePhoto = (photo) => ({ type: SET_PROFILE_PHOTO, photo })

export const getAuthUserData = () => {
   return (dispatch) => {
      authAPI.me().then((response) => {
         if (response.data.resultCode === 0) {   /* проверяем статус код, залогинин или нет */
           const { id, email, login } = response.data.data  /* деструктуризация */     
           dispatch(setAuthUserData(id, email, login))
           usersAPI.getProfilePhoto(id).then((photos) => {
               dispatch(setProfilePhoto(photos))
             })
         }
      })
   }
}

export default authReducer
