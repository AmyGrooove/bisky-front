import * as animeList from "../../public/json/animeList.json";
import * as facts from "../../public/json/facts.json";
import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import { BISKY_MAIN } from "../themes/sources";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const Home = () => {
  const [fact, setFact] = useState<string>();

  useEffect(() => {
    setFact(facts[Math.floor(Math.random() * facts.length)]);
  }, []);

  return (
    <div className="gaps">
      <div className="home home-header">
        <img src={BISKY_MAIN} alt="" />
        <div className="home-header-title">
          <div className="home-header-title-text">
            <div>Bisky</div> - Охотник 2-х Звёзд, мастер Шинген-Рю
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
          loop
          mousewheel
          grabCursor
          modules={[FreeMode, Mousewheel]}
        >
          {animeList.map((el, index) => (
            <SwiperSlide key={index} className="home-new-kino">
              <Link href={`/title/${el.id}`}>
                <button className="home-new-kino-block">
                  <img src={el.img} />
                  <div>{el.name}</div>
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
          loop
          mousewheel
          grabCursor
          modules={[FreeMode, Mousewheel]}
        >
          {animeList.map((el, index) => (
            <SwiperSlide key={index} className="home-new-kino">
              <Link href={`/title/${el.id}`}>
                <button className="home-new-kino-block">
                  <img src={el.img} />
                  <div>{el.name}</div>
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
