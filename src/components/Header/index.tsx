import Link from "next/link";
import userStore from "../../store/userStore";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <Link href="/">
            <div className="header-left-title">Bisky</div>
          </Link>
          <div className="header-left-links">
            <Link href="/animes">Anime</Link>
          </div>
        </div>
        <div className="header-right">
          <Link href={userStore.logged ? `/${userStore.user.login}` : "/login"}>
            <button className="button-red">
              {userStore.logged ? userStore.user.login : "Sign in"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
