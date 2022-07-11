import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

/*
const MyPostsConteiner = (props) => {
   return (
      <StoreContext.Consumer>
         {
         (store)=>{
            let state=store.getState()                                  //локальный стейт передаем весь стор

            let addPost = () => {              //добавление поста
               store.dispatch(addPostActionCreator())
            }

            let onPostChange = (text) => {                    //обновление поста
               let action = updateNewPostTextActionCreator(text)
               store.dispatch(action)
            }
            return <MyPosts 
               updateNewPostText={onPostChange}
               addPost={addPost} 
               posts={state.profilePage.posts} 
               newPostText={state.profilePage.newPostText}
            />
         }
      }
      </StoreContext.Consumer>
   )
}*/

let mapStateToProps=(state)=>{                           //функция из пакета'react-redux' для передачи state
   return{
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
   
}

let mapDispatchToProps=(dispatch)=>{                    //функция из пакета'react-redux' для передачи dispatch
   return{
      addPost:()=>{
         dispatch(addPostActionCreator())
      },
      updateNewPostText:(text)=>{
         dispatch(updateNewPostTextActionCreator(text))
      }
   }
}


const MyPostsConteiner =connect(mapStateToProps, mapDispatchToProps)(MyPosts)         //указываем (что передаем в props)(куда передаем)

export default MyPostsConteiner;