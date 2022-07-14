import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersApiComponents extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        //отправляем get запрос на сервак .then(response(когда запрос выполниться пишем логики что нужно сделать)
        this.props.setUsers(response.data.items); //это наш массив пользователей который отдает нам сервак
        this.props.setTotalUserCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        //отправляем get запрос на сервак .then(response(когда запрос выполниться пишем логики что нужно сделать)
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}

export default UsersApiComponents;
