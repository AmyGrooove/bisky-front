const user = {
  username: "SDASD",
  avatar:
    "https://i.pinimg.com/originals/95/30/6b/95306bffd3433f755ebf2c4960f66e14.png",
  background:
    "https://img1.goodfon.ru/original/1280x1024/4/53/anime-characters-wallpaper.jpg",
};

const gradientBack =
  "linear-gradient(36deg, rgba(133, 67, 88, 1) 0%, rgba(219, 83, 125, 1) 49%, rgba(249, 20, 93, 1) 100%";

const User = () => {
  return (
    <div className="gasp">
      <div className="user">
        <div
          className="user-image"
          style={{
            backgroundImage:
              user.background !== "" ? `url(${user.background}` : gradientBack,
          }}
        />
        <div className="user-main">
          <img className="user-main-image" src={user.avatar} alt="" />
          <div className="user-main-block">
            <div className="user-main-block-name">{user.username}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
