const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS='SET_USERS'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT='SET_TOTAL_USER_COUNT'
const TOGGALE_IS_FETCHING = 'TOGALE_IS_FETCHING'

let initialState = {                                        //в каждом редйюсере свой initialState
   users:[],
   pageSize: 15,
   totalUserCount: 0,
   currentPage: 1,
   isFetching: true
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(user=>{                         //т.к. map возвращает новый массив, то не нужно делать копию 
               if (user.id===action.userId){                       //по id находим нужного человека
                  return {...user, followed:true}            //если id совпадает, то возвращаем копию user из мапа с измененным followed
               }
               return user                                  //если не совпадает, то возвращаем тот же самый объект
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user=>{                         //т.к. map возвращает новый массив, то не нужно делать копию 
               if (user.id===action.userId){                       //по id находим нужного человека
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

      default:                                          //дефолтный кейс, если не найдется такого экшена
         return state
   }

}

export const follow = (userId) => ({ type: FOLLOW, userId })    //экспортируем экшн c userId(чтобы было понятно на кого подпичываться), который потом придет в редюсер
export const unfollow = (userId) => ({ type: UNFOLLOW, userId}) //экспортируем экшн c userId, который потом придет в редюсер
export const setUsers = (users)=>({type:SET_USERS, users})
export const setCurrentPage = (currentPage) => ({ type:SET_CURRENT_PAGE, currentPage })
export const setTotalUserCount = (totalUserCount) => ({ type:SET_TOTAL_USER_COUNT, count: totalUserCount })
export const toggaleIsFetching = (isFetching) => ({ type:TOGGALE_IS_FETCHING, isFetching })

export default usersReducer