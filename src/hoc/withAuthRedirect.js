import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

//!!!1) создаем компонент, который будет принимать в себя компонент, добавлять к нему редирект и возвращать обновленный компонент
//!!!2) оборачиваем компонент с помощью коннекта, чтобы инкапсулировать  пропсы

const mapStateToPropsForReirect = (state) => ({
    isAuth: state.auth.isAuth
  })

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to = { '/login' } />                               
                return <Component { ...this.props }/>
        }
    }
    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForReirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}