import MyPosts from './MyPost/MyPosts';
import MyPostsConteiner from './MyPost/MyPostsContainer';
import Post from './MyPost/Post/Post';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {


   return (
      <div>
         <ProfileInfo />

         <MyPostsConteiner/>
      </div>)
}

export default Profile;