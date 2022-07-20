import MyPostsConteiner from './MyPost/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = ({ profile }) => {
   return (
      <div>
         <ProfileInfo profile = { profile } />
         <MyPostsConteiner/>
      </div>)
}

export default Profile