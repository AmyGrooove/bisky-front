import { LinkLabel } from "@shared/ui/molecules/LinkLabel"
import st from "@appData/home/styles/home.module.scss"
import { getOneRandomFact, FactBlock } from "@entities/Fact"
import { getGenresQL } from "@entities/Genre"
import { SeasonSlider } from "@features/SeasonSlider"
import { getBestAnimesQL, getSeasonAnimesQL } from "@appData/home"
import { AnimeCardSlider } from "@features/AnimeCardSlider"
import { GenreBlockSlider } from "@features/GenreBlockSlider"
import { getNewSeriesAnimesQL } from "@appData/home/api/getNewSeriesAnimesQL"

const Home = async () => {
  const seasonsAnimes = await getSeasonAnimesQL()
  const newSeriesAnimes = await getNewSeriesAnimesQL()
  const bestAnimes = await getBestAnimesQL()
  const genres = await getGenresQL()
  const fact = await getOneRandomFact()

  return (
    <div className={st.root}>
      <div className={st.seasonWrapper}>
        <SeasonSlider items={seasonsAnimes} className={st.sliders} />
      </div>
      <div className={st.row}>
        <LinkLabel label="Новые серии" linkText="Смотреть все" href="#" />
        <AnimeCardSlider items={newSeriesAnimes} className={st.sliders} />
      </div>
      <div className={st.row}>
        <LinkLabel label="Самое популярное" linkText="Смотреть все" href="#" />
        <AnimeCardSlider items={bestAnimes} className={st.sliders} isTwoRows />
      </div>
      <div className={st.row}>
        <LinkLabel label="Жанры" linkText="Смотреть все" href="#" />
        <GenreBlockSlider items={genres} />
      </div>
      <FactBlock fact={fact} />
    </div>
  )
}

export default Home
