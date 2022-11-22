import userStore from "../../store/userStore";

const gradientBack =
  "linear-gradient(36deg, rgba(133, 67, 88, 1) 0%, rgba(219, 83, 125, 1) 49%, rgba(249, 20, 93, 1) 100%";

const User = () => {
  return (
    <div className="gasp">
      <div className="user">
        <div
          className="user-image"
          style={{
            backgroundImage: userStore.user.background
              ? `url(${userStore.user.background}`
              : gradientBack,
          }}
        />
        <div className="user-main">
          <img className="user-main-image" src={userStore.user.avatar} alt="" />
          <div className="user-main-block">
            <div className="user-main-block-name">{userStore.user.login}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
