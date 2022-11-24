import useUser from "../../hooks/useUser";
import { TRANSPARENT } from "../../themes/sources";

const gradientBack =
  "linear-gradient(36deg, rgba(133, 67, 88, 1) 0%, rgba(219, 83, 125, 1) 49%, rgba(249, 20, 93, 1) 100%";

const User = () => {
  const { user } = useUser();

  return (
    <div className="gaps">
      <div className="user">
        <div
          className="user-image"
          style={{
            backgroundImage:
              user.background !== "" ? `url(${user.background}` : gradientBack,
          }}
        />
        <div className="user-main">
          <img
            className="user-main-image"
            src={user.avatar !== "" ? user.avatar : TRANSPARENT}
            alt=""
          />
          <div className="user-main-info">
            <div className="user-main-info-block">
              <div className="user-main-info-block-name">{user.username}</div>
            </div>
            <div className="user-main-info-desc">{user.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
