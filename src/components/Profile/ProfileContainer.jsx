import React from 'react'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import Profile from './Profile'
import { useParams } from 'react-router-dom'
import { usersAPI } from '../../api/api'

export function withRouter(Children) {
  return (props) => {
     const match  = { params: useParams() };
     return <Children { ...props }  match = { match }/>
 }
}

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    const userId = this.props.match.params.userId || 2
    usersAPI.getProfileUser(userId).then((data) => {      //отправляем get запрос на сервак .then(response(когда запрос выполниться пишем логику что нужно сделать)
      this.props.setUserProfile(data)
    })
  }

  render() {
      return <Profile { ...this.props } profile = { this.props.profile } />   //с помощью spread оператора прокидываем все пропсы и "расскукоживаем" их
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile }) (WithUrlDataContainerComponent)