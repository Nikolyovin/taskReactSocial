
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
   return <div>
      <div>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtNH8isVNH4a1Ldu61Vr0B_oYQpMSYSf7QOf2iU68q_FVv39YSLPCyu26JPd0U3Q58Q&usqp=CAU" />
      </div>
      <div className={s.discriptionBlock}>
         ava + discription
      </div>
   </div>
}

export default ProfileInfo;