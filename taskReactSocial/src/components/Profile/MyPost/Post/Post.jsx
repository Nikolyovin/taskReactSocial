import s from './Post.module.css'


const Post = (props) => {


   return (
      <div className={s.item}>
         <div className={s.post_wrap}>
            <img src="https://otvet.imgsmail.ru/download/267702996_190bf37fa67857fdb468d383c4a2be25.jpg" />
            <span className={s.text}>{props.message}</span>
         </div>
         <div>
            <span> Like {props.likesCount}</span>
         </div>
      </div >

   )
}

export default Post;