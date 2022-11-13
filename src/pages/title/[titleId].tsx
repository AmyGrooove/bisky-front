import { useState } from "react";

const Title = () => {
  const title = {
    id: 1,
    name: {
      en: "JoJo no Kimyou na Bouken (TV)",
      ru: "Невероятное приключение ДжоДжо",
    },
    img: "https://dere.shikimori.one/system/animes/original/14719.jpg", //
    type: "TV Сериал",
    status: "Released",
    episodeCount: 26,
    genre: ["Shounen", "Action", "Adventure", "Supernatural", "Vampire"],
    datePublishing: "October 6, 2012",
    studio: "David Production",
    ageLimit: "R-17",
    episodeDuration: "24 min",
    description:
      "Великобритания, XIX век. Джонатан Джостар, он же ДжоДжо, счастливо живёт в особняке со своим отцом. И вот у его семьи случается пополнение — отец семейства Джордж Джостар усыновляет странного паренька по имени Дио Брандо. Джонатан рад — у него появится новый друг. Однако Дио вовсе не настроен проявлять дружелюбие. Он задумал избавиться от единственного наследника Джостаров и заполучить всё их состояние себе. Мало того, что он избил Джостара-младшего в спарринге по боксу, настроил его друзей против Джонатана, так ещё и украл первый поцелуй у его девушки! Как будто этого мало, Дио сжигает в печи любимую собаку Джонатана — Денни. Но хуже всего то, что Дио тоже лыком не шит — на людях он ведёт себя как образцовый джентльмен. Тут терпению ДжоДжо приходит конец...",
    linked: [""],
    rating: {
      score: 2,
      count: 231,
    },
  };

  const [addList, setAddList] = useState<number>(0);

  return (
    <div className="container">
      <div className="title border-block">
        <div className="title-name">
          <div>{title.name.ru}</div>/<div>{title.name.en}</div>
        </div>
        <div className="title-justify">
          <div className="title-main">
            <img src={title.img} alt="" />
            <div>
              <div className="title-main-block">
                <div className="title-main-block-info">
                  <div className="title-main-block-info-name">Тип:</div>
                  <div className="border">{title.type}</div>
                </div>
                <div className="title-main-block-info">
                  <div className="title-main-block-info-name">Статус:</div>
                  <div
                    className={`title-main-block-info-status ${title.status.toLowerCase()}`}
                  >
                    {title.status}
                  </div>
                </div>
                <div className="line" />
                <div className="title-main-block-info">
                  <div className="title-main-block-info-name">
                    Количество серий:
                  </div>
                  <div>{title.episodeCount}</div>
                </div>
                <div className="title-main-block-info">
                  <div className="title-main-block-info-name">
                    Длительность серии:
                  </div>
                  <div>{title.episodeDuration}</div>
                </div>
                <div className="line" />
                <div className="title-main-block-info genre">
                  <div className="title-main-block-info-name">Жанры:</div>
                  <div className="genre-text">
                    {title.genre.map((el) => (
                      <div>{el}</div>
                    ))}
                  </div>
                </div>
                <div className="line" />
                <div className="title-main-block-info">
                  <div className="title-main-block-info-name">
                    Возрастные ограничения:
                  </div>
                  <div className="border">{title.ageLimit}</div>
                </div>
                <div className="line" />
                <div className="title-main-block-info">
                  <div className="title-main-block-info-name">
                    Дата премьеры:
                  </div>
                  <div>{title.datePublishing}</div>
                </div>
                <div className="line" />
                <div className="title-main-block-info">
                  <div className="title-main-block-info-name">Студия:</div>
                  <div className="border">{title.studio}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="title-right">
            <div className="title-right-rating">
              <div className="title-right-rating-headline">Рейтинг</div>
              <div
                className={`title-right-rating-score ${
                  title.rating.score < 4
                    ? "orange"
                    : title.rating.score < 7
                    ? "yellow"
                    : title.rating.score < 9.8
                    ? "green"
                    : "bisky"
                }`}
              >
                {title.rating.score}
              </div>
              <div className="title-right-rating-count">
                {title.rating.count} оценок
              </div>
              <button className="title-right-rating-rait">Оценить</button>
            </div>
            <select
              value={addList}
              onChange={(e) => setAddList(Number(e.target.value))}
            >
              <option value={0} selected disabled hidden>
                Add to My List
              </option>
              <option value={1}>Completed</option>
              <option value={2}>Dropped</option>
              <option value={3}>On Hold</option>
              <option value={4}>Planned to Watch</option>
              <option value={5}>Rewatching</option>
              <option value={6}>Watching</option>
              {addList !== 0 && (
                <option className="delete" value={0}>
                  Remove from My List
                </option>
              )}
            </select>
          </div>
        </div>
      </div>
      <div className="title border-block">
        <div>{title.description}</div>
        <div className="title-media">
          <div className="title-media-block">
            <div className="title-media-block-headline">Скриншоты</div>
            <div className="title-media-block-row">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className="title-media-block">
            <div className="title-media-block-headline">Видео</div>
            <div className="title-media-block-row">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
