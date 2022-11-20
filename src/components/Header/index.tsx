import useHeader from "./useHeader";
import userStore from "../../store/userStore";
import Link from "next/dist/client/link";
import { BISKY_LOGO } from "../../themes/sources";

const Header = () => {
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
          <Link href="/list?type=anime">
            <div className={`header-left-link ${selectStyle("anime")}`}>
              Аниме
            </div>
          </Link>
          <Link href="/list?type=kino">
            <div className={`header-left-link ${selectStyle("kino")}`}>
              Фильмы
            </div>
          </Link>
          <Link href="/list?type=series">
            <div className={`header-left-link ${selectStyle("series")}`}>
              Сериалы
            </div>
          </Link>
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
};

export default Header;
