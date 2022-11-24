import { observer } from "mobx-react-lite";
import Link from "next/link";
import { TO_LIST_STATES } from "../../../components/Title/SelectTitle";
import useUser from "../../../hooks/useUser";
import userStore from "../../../store/userStore";
import { EXIT_ICON, SETTINGS_ICON, TRANSPARENT } from "../../../themes/sources";

const gradientBack =
  "linear-gradient(36deg, rgba(133, 67, 88, 1) 0%, rgba(219, 83, 125, 1) 49%, rgba(249, 20, 93, 1) 100%";

const User = observer(() => {
  const { user, exitButton } = useUser();
  const { logged } = userStore;

  return (
    <div className="gaps">
      <div className="user">
        <div
          className="user-image"
          style={{
            backgroundImage: user.background
              ? `url(${user.background}`
              : gradientBack,
          }}
        />
        <div className="user-main">
          <div className="user-main-left">
            <img
              className="user-main-left-image"
              src={user.avatar ? user.avatar : TRANSPARENT}
              alt=""
            />
            <div className="user-main-left-info">
              <div className="user-main-left-info-block">
                <div className="user-main-left-info-block-name">
                  {user.login}
                </div>
              </div>
              {/* <div className="user-main-info-desc">{user.description}</div> */}
            </div>
          </div>
          <div className="user-main-right">
            {logged && (
              <>
                <Link href={`${user.login}/settings`}>
                  <img src={SETTINGS_ICON} alt="" />
                </Link>
                <img onClick={() => exitButton()} src={EXIT_ICON} alt="" />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="miniInfo">
        <Link href={`${user.login}/list`}>
          <div className="miniInfo-title">
            <div>Аниме</div>
            <div>🠚</div>
          </div>
        </Link>
        <div className="miniInfo-length">
          <div>Добавленных аниме:</div>
          <div>{user.userShortTitlesLength}</div>
        </div>
        <div className="miniInfo-block">
          {TO_LIST_STATES.map((el, index) => (
            <div key={index} className="miniInfo-block-row">
              <div>
                {el}:{user.countStatus[index]}
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default User;
