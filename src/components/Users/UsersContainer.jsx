import React from "react"
import { connect } from "react-redux"
import {
  follow,
  setCurrentPage,
  unfollow,
  toggaleIsFollowingProgress,
  getUsers
} from "../../redux/users-reducer"
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"

// здесь контейнерный компонент внутри другого контенерного компонента с помошью mapStateToProps и mapDispatchToProps мы передаем пропсы, а потом еще раз эти пропсы передаем в чистый компонент

class UsersContainer extends React.Component {
  
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

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
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
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
    followingInProgress: state.usersPage.followingInProgress
  }
}
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

export default compose (
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggaleIsFollowingProgress, getUsers }),
    /* withAuthRedirect */)(UsersContainer)
