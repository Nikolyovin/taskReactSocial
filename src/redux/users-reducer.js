import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS='SET_USERS'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT='SET_TOTAL_USER_COUNT'
const TOGGALE_IS_FETCHING = 'TOGALE_IS_FETCHING'
const TOGGALE_IS_FOLLOWING_PROGRESS = 'TOGGALE_IS_FOLLOWING_PROGRESS'

let initialState = {                                        //в каждом редйюсере свой initialState
   users:[],
   pageSize: 15,
   totalUserCount: 0,
   currentPage: 1,
   isFetching: true,
   followingInProgress: [ ]                                                     //массив id-шников с нажатыми кнопками 
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(user=>{                         //т.к. map возвращает новый массив, то не нужно делать копию 
               if (user.id === action.userId){                       //по id находим нужного человека
                  return {...user, followed:true}            //если id совпадает, то возвращаем копию user из мапа с измененным followed
               }
               return user                                  //если не совпадает, то возвращаем тот же самый объект
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user=>{                         //т.к. map возвращает новый массив, то не нужно делать копию 
               if (user.id === action.userId){                       //по id находим нужного человека
                  return {...user, followed:false}            //если id совпадает, то возвращаем копию user из мапа с измененным followed
               }
               return user                                  //если не совпадает, то возвращаем тот же самый объект
            })
         }

      case SET_USERS:{                 //к нам приходят юзеры с сервера
         //мы копируем state берем старых пользователей, соеденяем их с новыми с сервера и перезатираем их новыми
         return { ...state, users: action.users}         
      }

      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage}
      }

      case SET_TOTAL_USER_COUNT: {
         return { ...state, totalUserCount: action.count}
      }

      case TOGGALE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching}
      }

      case TOGGALE_IS_FOLLOWING_PROGRESS: {
         return { 
            ...state, 
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]                                 // добавляем юзера в массив, где храняться id чья кнопка нажата
               : state.followingInProgress.filter(id => id != action.userId)                   //с помощью фильтра убираем ненужного юзера

         }
      }

      default:                                          //дефолтный кейс, если не найдется такого экшена
         return state
   }

}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })    //экспортируем экшн c userId(чтобы было понятно на кого подпичываться), который потом придет в редюсер
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId}) //экспортируем экшн c userId, который потом придет в редюсер
export const setUsers = (users)=>({type:SET_USERS, users})
export const setCurrentPage = (currentPage) => ({ type:SET_CURRENT_PAGE, currentPage })
export const setTotalUserCount = (totalUserCount) => ({ type:SET_TOTAL_USER_COUNT, count: totalUserCount })
export const toggaleIsFetching = (isFetching) => ({ type: TOGGALE_IS_FETCHING, isFetching })
export const toggaleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGALE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize, /* pageNumber */) => {
   return (dispatch) => {
      dispatch(toggaleIsFetching(true)) //иконка загрузки
      usersAPI.getUsers(currentPage, pageSize).then((data) => {     //отправляем get запрос на сервак .then(response(когда запрос выполниться пишем логику что нужно сделать)
        dispatch(toggaleIsFetching(false))
        dispatch(setUsers(data.items)) //это наш массив пользователей который отдает нам сервак
        dispatch(setTotalUserCount(data.totalCount))
      //   dispatch(setCurrentPage(pageNumber))
      })
   }
}

export const follow = (userId) => {
   return (dispatch) => {
      dispatch(toggaleIsFollowingProgress(true, userId))
      usersAPI.unfollowSuccess(userId).then((resultCode) => {
          if (resultCode == 0) {
            dispatch(followSuccess(userId))
          }
          dispatch(toggaleIsFollowingProgress(false, userId))
        })
   }
}

export const unfollow = (userId) => {
   return (dispatch) => {
      dispatch(toggaleIsFollowingProgress(true, userId))
      usersAPI.followSuccess(userId).then((resultCode) => {
          if (resultCode == 0) {
            dispatch(unfollowSuccess(userId))
          }
          dispatch(toggaleIsFollowingProgress(false, userId))
        })
   }
}

export default usersReducer
