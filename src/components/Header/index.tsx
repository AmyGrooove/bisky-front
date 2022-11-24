import useHeader from "./useHeader";
import userStore from "../../store/userStore";
import Link from "next/dist/client/link";
import { BISKY_LOGO } from "../../themes/sources";
import { observer } from "mobx-react-lite";
import { types } from "../../constants";

const Header = observer(() => {
  const { selectStyle } = useHeader();

  return (
    <div className="header">
      <div className="container header-container">
        <div className="header-left">
          <Link href="/">
            <div className="header-left-name">
              <img src={BISKY_LOGO} alt="" />
              <div>Bisky</div>
            </div>
          </Link>
          {types.map((el) => (
            <Link href={`/list?type=${el.type}`}>
              <div className={`header-left-link ${selectStyle(el.type)}`}>
                {el.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="header-right">
          <Link
            href={userStore.logged ? `/user/${userStore.user.login}` : "/login"}
          >
            <button className="button button-red">
              {userStore.logged ? userStore.user.login : "Войти"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Header;
