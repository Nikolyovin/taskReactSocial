import s from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";
import { NavLink } from 'react-router-dom'
import { usersAPI } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={ s.users_wrap }>
      <div>
        {pages.map((p) => {
          return (
            <span
              className = { props.currentPage === p && s.selectedPage }
              onClick = { (e) => {
                props.onPageChanged(p);
              }}
            >
              { p }
            </span>
          );
        })}
      </div>
      { props.users.map((user) => (
        <div key = { user.id } className = { s.users_items }>
          <div>
            <NavLink to = { `/profile/${ user.id }` }>
              <img
                src = { user.photos.small != null ? user.photos.small : userPhoto }
                className = { s.userPhoto }
              />
            </NavLink>
          </div>

          <div className = { s.user_items_data }>
            <div>
              { user.followed ? 
                <button onClick = { () => { 
                  usersAPI.deleteFollow(user.id).then((resultCode) => {
                      if (resultCode == 0) {
                        props.unfollow(user.id)
                      }
                    })
                }}>
                    Unfollow
                </button>
                : 
                <button onClick={() => {
                  usersAPI.postFollow(user.id).then((resultCode) => {
                      if (resultCode == 0) {
                        props.follow(user.id)
                      }
                  })
                }}>
                  Follow
                </button>
              }
            </div>

            <div>{user.name}</div>
            <div>{user.status}</div>

            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
