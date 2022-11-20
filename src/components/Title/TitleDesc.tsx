import useTitle from "./useTitle";

const TitleDesc = () => {
  const { title } = useTitle();

  return (
    <div className="title">
      <div>{title().description}</div>
      <div className="title-media">
        <div className="title-media-block">
          <div className="title-media-block-headline">Скриншоты</div>
          <div className="title-media-block-row">
            <img src={title().screens[0]} alt="" />
            <img src={title().screens[1]} alt="" />
            <img src={title().screens[2]} alt="" />
          </div>
        </div>
        <div className="title-media-block">
          <div className="title-media-block-headline">Видео</div>
          <div className="title-media-block-row">
            <a
              href={"https://www.youtube.com/watch?v=" + title().video}
              target="_blank"
            >
              <img
                src={
                  "https://i.ytimg.com/vi/" + title().video + "/hqdefault.jpg"
                }
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleDesc;
