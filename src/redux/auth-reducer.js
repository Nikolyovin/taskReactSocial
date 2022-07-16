const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {                                        //в каждом редйюсере свой initialState
   userId: null,
   email: null,
   login: null,
   isAuth: false
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         console.log('action', action.type)
         return {
            ...state,
            ...action.data,
            isAuth: true
         }



      default:                                          //дефолтный кейс, если не найдется такого экшена
         return state
   }

}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })    //экспортируем экшн c userId(чтобы было понятно на кого подпичываться), который потом придет в редюсер


export default authReducer
