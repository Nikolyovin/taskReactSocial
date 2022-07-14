import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'




const MyPosts = (props) => {

   let postElement = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)

   let newPostElement = React.createRef();

   let onAddPost = () => {              /*добавление поста*/
      props.addPost()


   }

   let onPostChange = () => {                    /*обновление поста*/
      let text = newPostElement.current.value
      props.updateNewPostText(text)
     

   }

   return (
      <div className={s.postBlock}>
         <div>
            <h3>My post</h3>
         </div>

         <div>
            <div><textarea onChange={onPostChange}
               ref={newPostElement}
               value={props.newPostText} /></div>
            <div><button onClick={onAddPost}> Add Post</button></div>
            <div><button>REmove</button></div>
            {postElement}
         </div>
      </div>




   )
}

export default MyPosts;