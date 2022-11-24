import Link from "next/dist/client/link";
import { BISKY_MAIN } from "../themes/sources";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import useHome from "../hooks/useHome";

const Home = () => {
  const { fact, animeList } = useHome();

  return (
    <div className="gaps">
      <div className="home home-header">
        <img src={BISKY_MAIN} alt="" />
        <div className="home-header-title">
          <div className="home-header-title-text">
            <div>Bisky</div> - Сайт для ведения списка просмотренных
            фильмов/сериалов
          </div>
          <div className="home-header-title-desc">{fact}</div>
        </div>
      </div>
      <div className="home home-new">
        <div className="home-new-title">
          <div>Новинки</div>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={44}
          mousewheel
          freeMode
          grabCursor
          modules={[FreeMode, Mousewheel]}
        >
          {animeList.map((el, index) => (
            <SwiperSlide key={index} className="home-new-kino">
              <Link href={`/title/${el.id}`}>
                <button className="home-new-kino-block">
                  <img src={el.img} />
                  <div>{el.name[0]}</div>
                </button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="home home-new">
        <div className="home-new-title">
          <div>Самое популярное</div>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={44}
          mousewheel
          freeMode
          grabCursor
          modules={[FreeMode, Mousewheel]}
        >
          {animeList.map((el, index) => (
            <SwiperSlide key={index} className="home-new-kino">
              <Link href={`/title/${el.id}`}>
                <button className="home-new-kino-block">
                  <img src={el.img} />
                  <div>{el.name[0]}</div>
                </button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
