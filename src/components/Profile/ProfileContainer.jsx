import axios from 'axios';
import React from 'react';
import Profile from './Profile';

class ProfileContainer extends React.Component {

  componentDidMount() {
      this.props.toggaleIsFetching(true) //иконка загрузки
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          //отправляем get запрос на сервак .then(response(когда запрос выполниться пишем логику что нужно сделать)
          this.props.toggaleIsFetching(false)
          this.props.setUsers(response.data.items); //это наш массив пользователей который отдает нам сервак
          this.props.setTotalUserCount(response.data.totalCount);
        });
}

  render() {
      return <Profile { ...this.props } />   //с помощью spread оператора прокидываем все пропсы и "расскукоживаем" их
  }
}

export default ProfileContainer