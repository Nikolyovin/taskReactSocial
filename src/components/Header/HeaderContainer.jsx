import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import { setAuthUserData, setProfilePhoto } from "../../redux/auth-reducer"
import { usersAPI } from "../../api/api"

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getAuth()
      .then((data) => {
        if (data.resultCode === 0) {   /* проверяем статус код, залогинин или нет */
          const { id, email, login } = data.data  /* деструктуризация */     
          this.props.setAuthUserData(id, email, login)
          usersAPI.getProfilePhoto(id)
            .then((photos) => {
              this.props.setProfilePhoto(photos)
            })
        }
      })
  }

  render() {
    return <Header { ...this.props } />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  photo: state.auth.photo
})

export default connect(mapStateToProps, { setAuthUserData, setProfilePhoto })(HeaderContainer)
