import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import Profile from './Profile'
import { useParams } from 'react-router-dom'

export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    const userId = this.props.match.params.userId || 2
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        //отправляем get запрос на сервак .then(response(когда запрос выполниться пишем логику что нужно сделать)
        this.props.setUserProfile(response.data)
      })
}

  render() {
    console.log('this.props.profile:', this.props)
      return <Profile { ...this.props } profile = { this.props.profile } />   //с помощью spread оператора прокидываем все пропсы и "расскукоживаем" их
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile }) (WithUrlDataContainerComponent)