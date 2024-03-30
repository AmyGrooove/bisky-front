import { LinkLabel } from "@shared/ui/molecules/LinkLabel"
import st from "@appData/home/styles/home.module.scss"
import { GenreBlockSlider } from "@features/GenreBlockSlider/ui/GenreBlockSlider"
import { getOneRandomFact, FactBlock } from "@entities/Fact"
import { getGenresQL } from "@entities/Genre"
import { SeasonSlider } from "@features/SeasonSlider/ui/SeasonSlider"
import { getSeasonAnimesQL } from "@appData/home"

const Home = async () => {
  const seasonsAnimes = await getSeasonAnimesQL()
  const genres = await getGenresQL()
  const fact = await getOneRandomFact()

  return (
    <div className={st.root}>
      <div className={st.seasonWrapper}>
        <SeasonSlider items={seasonsAnimes} className={st.season} />
      </div>
      <div className={st.row}>
        <LinkLabel label="Жанры" linkText="Смотреть все" href="/" />
        <GenreBlockSlider items={genres} />
      </div>
      <FactBlock fact={fact} />
    </div>
  )
}

export default Home
