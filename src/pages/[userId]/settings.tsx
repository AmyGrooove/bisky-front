import Link from "next/link";
import { URL } from "../../api";
import useUser from "../../hooks/useUser";

const Settings = () => {
  const {
    user,
    changeLogin,
    setChangeLogin,
    avatar,
    setAvatar,
    background,
    setBackground,
  } = useUser();

  return (
    <div className="gaps">
      <div className="settings">
        <Link href={`/${user.username}`}>
          <div className="settings-bread">
            <div>🠔 Назад</div>
          </div>
        </Link>
        <div className="settings-title">Основные настройки</div>
        <div className="settings-block">
          <div className="settings-block-title">Логин</div>
          <div className="settings-block-input">
            <div>{URL}</div>
            <input
              type="text"
              value={changeLogin}
              onChange={(e) => setChangeLogin(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="settings">
        <div className="settings-title">Дополнительные настройки</div>
        <div className="settings-block">
          <div className="settings-block-title">Avatar</div>
          <input
            className="settings-block-doplInput"
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <div className="settings-block">
          <div className="settings-block-title">Background</div>
          <input
            className="settings-block-doplInput"
            type="text"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />
        </div>
      </div>
      <div className="settings">
        <div className="settings-button">
          <button className="settings-button">Сохранить изменения</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
