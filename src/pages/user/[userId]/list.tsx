import Link from "next/link";
import useUser from "../../../hooks/useUser";

const List = () => {
  const { user } = useUser();

  return (
    <div className="gaps">
      <div className="listUser">
        <Link href={`/user/${user.login}`}>
          <div className="settings-bread">
            <div>🠔 Назад</div>
          </div>
        </Link>
        <div className="listUser-title">
          <img src={user.avatar || ""} alt="" />
          <div>{user.login}</div>
        </div>
        <div
          className="listUser-pannels"
          style={{
            height: "100%",
          }}
        >
          {user.userShortTitles.map((el, index) => (
            <Link href={`/title/${el.id}`} key={index}>
              <button
                className="list pannels-kino"
                style={{
                  position: "relative",
                  top: "-35px",
                }}
              >
                <div className="listUser-title-flex">
                  <div
                    className={`listUser-title-flex-rating b${user.userTitlesStatus[index].rating}`}
                  >
                    {user.userTitlesStatus[index].rating}
                  </div>
                  <div className="listUser-title-flex-status">
                    {user.userTitlesStatus[index].status}
                  </div>
                </div>
                <img src={el.img} />
                <div>{el.name}</div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
