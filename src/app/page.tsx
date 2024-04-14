import { LinkLabel } from "@shared/ui/molecules/LinkLabel"
import { getOneRandomFact, FactBlock } from "@entities/Fact"
import { SeasonSlider } from "@features/SeasonSlider"
import { AnimeCardSlider } from "@features/AnimeCardSlider"
import { GenreBlockSlider } from "@features/GenreBlockSlider"
import { UserAnimeSlider, homeStyles as st } from "@appData/home"
import { getHomeData } from "@appData/home/api"

const Home = async () => {
  const homeData = await getHomeData()
  const fact = await getOneRandomFact()

  return (
    <div className={st.root}>
      <div className={st.seasonWrapper}>
        <SeasonSlider items={homeData.seasonAnimes} className={st.sliders} />
      </div>
      <UserAnimeSlider />
      <div className={st.row}>
        <LinkLabel label="Новые серии" linkText="Смотреть все" href="#" />
        <AnimeCardSlider items={homeData.newSeriesAnimes} />
      </div>
      <div className={st.row}>
        <LinkLabel label="Самое популярное" linkText="Смотреть все" href="#" />
        <AnimeCardSlider items={homeData.bestAnimes} isTwoRows />
      </div>
      <div className={st.row}>
        <LinkLabel label="Жанры" linkText="Смотреть все" href="#" />
        <GenreBlockSlider items={homeData.homeGenres} />
      </div>
      <FactBlock fact={fact} />
    </div>
  )
}

export default Home
