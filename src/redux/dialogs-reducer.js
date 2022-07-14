const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState = {                                         //в каждом редйюсере свой initialState
   messages: [
      { id: 1, who: 'myMessage', text: 'Hi' },
      { id: 2, who: 'myMessage', text: 'How are you?' },
      { id: 3, who: 'heMessage', text: 'Good' },
      { id: 4, who: 'myMessage', text: 'What are you doing?' },
      { id: 5, who: 'heMessage', text: 'I\'m going to workout' },
   ],
   newMessageText: 'new message',
   dialogs: [
      { id: 1, name: 'Dimych', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1wlTDFXbBVgGSqKGrt83uwlgjNg9KdFVhw&usqp=CAU' },
      { id: 2, name: 'Andrey', img: 'https://avatars.mds.yandex.net/get-zen_doc/1328418/pub_5ab6096877d0e6d894e85a60_5ab6099e20ea2b70d1c77a6f/scale_1200' },
      { id: 3, name: 'Sveta', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNla357t0PEDFb0mlbOwWf4ngmOcAI_52mA&usqp=CAU' },
      { id: 4, name: 'Sasha', img: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg' },
      { id: 5, name: 'Victor', img: 'https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg' },
      { id: 6, name: 'Valera', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3giZKW-NAcx_NiKq0ubjTVXrpSl6m1HBlw&usqp=CAU' }
   ]
}



const dialogsReducer = (state = initialState, action) => {                 //state по умолчанию равен initialState

   switch (action.type) {
      case ADD_MESSAGE:{
         return {
            ...state,                                       //делаем копию state, чтобы в ней вносить изменения                                          
            newMessageText:'',                              //делаем пустую строку после отправки сообщения
            messages:[...state.messages, {id:7, who:'myMessage', text:state.newMessageText}],  //делаем копию массива в котором будут изменения + добавляем новое сообщение
         }                          
        
      }
      case UPDATE_NEW_MESSAGE_TEXT:
         return  {...state,
         newMessageText:action.newMsg                    //сохраняем новый state
   }
         
      default:
         return state
   }

}

export default dialogsReducer
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })           //экспортируем экшн, где в типе ADD_MESSAGE, который потом придет в редюсер
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMsg: text })