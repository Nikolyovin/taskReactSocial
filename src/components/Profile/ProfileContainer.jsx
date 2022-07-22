import React from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profile-reducer'
import Profile from './Profile'
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

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
    this.props.getUserStatus(userId)
  }

  render() {
   
    return <Profile { ...this.props } profile = { this.props.profile } />   //с помощью spread оператора прокидываем все пропсы и "расскукоживаем" их
  }
}         

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

 // создаем еще контейнерную кмопоненту, чтобы передать данные из url(мы передаем :userId в app.js)
 //еще одна контейнерная компонента, которая будет делать редирект

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  /* withAuthRedirect */
)(ProfileContainer)
