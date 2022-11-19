import SelectTitle from "./SelectTitle";
import useTitle from "./useTitle";

const TitleMain = () => {
  const { title, getRatingColor } = useTitle();

  return (
    <div className="title">
      <div className="title-name">
        <div>{title().name.ru}</div>/<div>{title().name.en}</div>
      </div>
      <div className="title-justify">
        <div className="title-main">
          <img src={title().img} alt="" />
          <div className="title-main-block">
            <div className="title-main-block-info">
              <div className="title-main-block-info-name">Тип:</div>
              <div className="border">{title().type}</div>
            </div>
            <div className="title-main-block-info">
              <div className="title-main-block-info-name">Статус:</div>
              <div
                className={`title-main-block-info-status ${title().status.toLowerCase()}`}
              >
                {title().status}
              </div>
            </div>
            <div className="line" />
            <div className="title-main-block-info">
              <div className="title-main-block-info-name">
                Количество серий:
              </div>
              <div>{title().episodeCount}</div>
            </div>
            <div className="title-main-block-info">
              <div className="title-main-block-info-name">
                Длительность серии:
              </div>
              <div>{title().episodeDuration}</div>
            </div>
            <div className="line" />
            <div className="title-main-block-info genre">
              <div className="title-main-block-info-name">Жанры:</div>
              <div className="genre-text">
                {title().genre.map((el) => (
                  <div>{el}</div>
                ))}
              </div>
            </div>
            <div className="line" />
            <div className="title-main-block-info">
              <div className="title-main-block-info-name">
                Возрастные ограничения:
              </div>
              <div className="border">{title().ageLimit}</div>
            </div>
            <div className="line" />
            <div className="title-main-block-info">
              <div className="title-main-block-info-name">Дата премьеры:</div>
              <div>{title().datePublishing}</div>
            </div>
            <div className="line" />
            <div className="title-main-block-info">
              <div className="title-main-block-info-name">Студия:</div>
              <div className="border">{title().studio}</div>
            </div>
          </div>
        </div>
        <div className="title-right">
          <div className="title-right-rating">
            <div className="title-right-rating-headline">Рейтинг</div>
            <div className={`title-right-rating-score ${getRatingColor()}`}>
              {title().rating.score}
            </div>
            <div className="title-right-rating-count">
              {title().rating.count} оценок
            </div>
            <button className="title-right-rating-rait">Оценить</button>
          </div>
          <SelectTitle />
        </div>
      </div>
    </div>
  );
};

export default TitleMain;
