import React from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profile-reducer'
import Profile from './Profile'
import { Navigate, useParams } from 'react-router-dom'

export function withRouter(Children) {
  return (props) => {
    const match  = { params: useParams() }
    return <Children { ...props }  match = { match }/>
  }
}

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    const userId = this.props.match.params.userId || 2
    this.props.getUserProfile(userId)
  }

  render() {
    if (!this.props.isAuth) return <Navigate to = { '/login' } />
    return <Profile { ...this.props } profile = { this.props.profile } />   //с помощью spread оператора прокидываем все пропсы и "расскукоживаем" их
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile }) (WithUrlDataContainerComponent)