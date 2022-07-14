const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {                                        //в каждом редйюсере свой initialState
   posts: [
      { id: 1, message: 'Hello, yow are you?', likesCount: 15 },
      { id: 2, message: "It's my first post", likesCount: 20 },
      { id: 3, message: 'Blabla', likesCount: 15 },
      { id: 4, message: 'dadadad', likesCount: 15 },
   ],
   newPostText: 'it-kamasutra.com'
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
         
      default:                                          //дефолтный кейс, если не найдется такого экшена
         return state
   }

}
////test

export default profileReducer
export const addPostActionCreator = () => ({ type: ADD_POST })    //экспортируем экшн, где в типе ADD_POST, который потом придет в редюсер
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })