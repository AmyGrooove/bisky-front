import Link from "next/link";
import { useRouter } from "next/router";
import useList from "../../hooks/useList";
import { BISKY_TITLE } from "../../themes/sources";

const List = () => {
  const { animeList, selectType } = useList();

  return (
    <div className="filter-container">
      <div className="gaps">
        <div className="list down-margin">
          <div className="list-title">{selectType().title}</div>
          <div className="list-desc">
            <img src={BISKY_TITLE} alt="" />
            <div className="list-desc-name">{selectType().desc}</div>
          </div>
        </div>
        <div className="list pannels">
          {animeList.map((el, index) => (
            <Link href={`/title/${el.id}`} key={index}>
              <button className="list pannels-kino">
                <img src={el.img} />
                <div>{el.name}</div>
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="filter">
        <div className="filter-title">Фильтры</div>
        <div className="filter-box">
          <div className="filter-box-block">
            <div className="filter-box-block-title">Жанры</div>
            <input type="text" />
          </div>
          <div className="filter-box-block">
            <div className="filter-box-block-title">Тип</div>
            <input type="text" />
          </div>
          <div className="filter-box-block">
            <div className="filter-box-block-title">Статус</div>
            <input type="text" />
          </div>
          <div className="filter-box-block">
            <div className="filter-box-block-title">Возрастное ограничение</div>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
