import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import { setAuthUserData, setProfilePhoto } from "../../redux/auth-reducer"

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
        withCredentials: true                                       /* передаем криды, авторизованный запрос */
      })
      .then((response) => {
        console.log('response:', response)
        if (response.data.resultCode === 0) {   /* проверяем статус код, залогинин или нет */
        // console.log('setAuthUserData:', setAuthUserData)
        console.log('props:', this.props)
          const { id, email, login } = response.data.data  /* деструктуризация */     
          this.props.setAuthUserData(id, email, login)
          axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${ id }`)
            .then((response) => {
              console.log('response:', response)
              this.props.setProfilePhoto(response.data.photos.small)
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
