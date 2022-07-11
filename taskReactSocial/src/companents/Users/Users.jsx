import s from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.users_wrap}>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id} className={s.users_items}>
          <div>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={s.userPhoto}
            />
          </div>

          <div className={s.user_items_data}>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Unfollow
                </button>
              )}
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
