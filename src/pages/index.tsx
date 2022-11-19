import { BISKY_CHAR } from "../themes/sources";

import * as animeList from "../../public/json/animeList.json";
import * as facts from "../../public/json/facts.json";
import Link from "next/dist/client/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [fact, setFact] = useState<string>();

  useEffect(() => {
    setFact(facts[Math.floor(Math.random() * facts.length)]);
  }, []);

  return (
    <div className="gaps">
      <div className="home home-header">
        <img src={BISKY_CHAR} alt="" />
        <div className="home-header-title">
          <div className="home-header-title-text">
            <div>Bisky</div> - сайт asd
          </div>
          <div className="home-header-title-desc">{fact}</div>
        </div>
      </div>
      <div className="home home-new">
        <div className="home-new-title">
          <div>Новинки</div>
        </div>
        <div className="home-new-kino">
          {animeList.map((el, index) => (
            <Link href={`/title/${el.id}`} key={index}>
              <button className="home-new-kino-block">
                <img src={el.img} />
                <div>{el.name}</div>
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="home home-new">
        <div className="home-new-title">
          <div>Самое популярное</div>
        </div>
        <div className="home-new-kino">
          {animeList.map((el, index) => (
            <Link href={`/title/${el.id}`} key={index}>
              <button className="home-new-kino-block">
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

export default Home;
