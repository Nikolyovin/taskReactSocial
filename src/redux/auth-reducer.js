const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {                                        //в каждом редйюсере свой initialState
    userId: null,
    email: null,
    login: null
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
             ...state,
             ...action.data
         }

      

      default:                                          //дефолтный кейс, если не найдется такого экшена
         return state
   }

}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login }})    //экспортируем экшн c userId(чтобы было понятно на кого подпичываться), который потом придет в редюсер


export default authReducer
