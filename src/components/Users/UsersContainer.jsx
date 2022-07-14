import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUserCount,
  setUsers,
  toggaleIsFetching,
  unfollow,
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  
  componentDidMount() {
    this.props.toggaleIsFetching(true) //иконка загрузки
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        //отправляем get запрос на сервак .then(response(когда запрос выполниться пишем логику что нужно сделать)
        this.props.toggaleIsFetching(false)
        this.props.setUsers(response.data.items); //это наш массив пользователей который отдает нам сервак
        this.props.setTotalUserCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggaleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        //отправляем get запрос на сервак .then(response(когда запрос выполниться пишем логики что нужно сделать)
        this.props.toggaleIsFetching(false)
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  //берет весь state, а отдает через props тот о котором можно знать чистой функции
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   //через пропсы передаем эшкн, через экшнкреейтор
//   return {
//     follow: followAC,
//     unfollow: unfollowAC,
//     setUsers: setUsersAC,
//     setCurrentPage: setCurrentPageAC,
//     setTotalUserCount: setTotalUserCountAC,
//     toggaleIsFetching: toggaleIsFetchingAC
//   }
// }

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, toggaleIsFetching })(UsersContainer);