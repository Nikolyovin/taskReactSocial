
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/images.png'
import ProfileStatus from './ProfileStatus';


const ProfileInfo = ( { profile } ) => {
   if (!profile) return <Preloader />

   return (
      <>
         {/* <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtNH8isVNH4a1Ldu61Vr0B_oYQpMSYSf7QOf2iU68q_FVv39YSLPCyu26JPd0U3Q58Q&usqp=CAU" />
         </div> */}
         <div className = { s.discriptionBlock }>
            <img className = { s.profilePhoto } src = { profile.photos.large || userPhoto } />
         </div>
         <ProfileStatus  status={ "какой-то статус" }/>
         <div className = { s.contactsWrap }>
            <span>Контакты:</span>
            <ul className = { s.contactsList }>
               {Object.values(profile.contacts).map(item => <li><a href = { item }> { item } </a></li>)}
            </ul>
         </div>
         <div className = { s.jobWrap }>
            { profile.contacts? <span>Ищу работу!!!</span> : <span>ТРУДОУСТРОЕН!</span> }
         </div>
      </>
   )
}

export default ProfileInfo;