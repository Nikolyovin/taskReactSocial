import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'Hello, yow are you?', likesCount: 15 },
            { id: 2, message: "It's my first post", likesCount: 20 },
            { id: 3, message: 'Blabla', likesCount: 15 },
            { id: 4, message: 'dadadad', likesCount: 15 },
         ],
         newPostText: 'it-kamasutra.com'

      },
      dialogsPage: {
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

      },
      sidebar: {
         friends: [{ id: 1, name: 'Dimych', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1wlTDFXbBVgGSqKGrt83uwlgjNg9KdFVhw&usqp=CAU' },
         { id: 2, name: 'Andrey', img: 'https://avatars.mds.yandex.net/get-zen_doc/1328418/pub_5ab6096877d0e6d894e85a60_5ab6099e20ea2b70d1c77a6f/scale_1200' },
         { id: 3, name: 'Sveta', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNla357t0PEDFb0mlbOwWf4ngmOcAI_52mA&usqp=CAU' },
         ]
      },
   },
   _callSubscriber() {
      console.log('State changed')
   },

   getState() {
      return this._state
   },
   subscrie(observer) {
      this._callSubscriber = observer
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)

      this._callSubscriber(this._state)            //уведомляем подпищиков
   }

}



























window.store = store

export default store