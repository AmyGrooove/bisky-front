import { LinkLabel } from "@shared/ui/molecules/LinkLabel"
import { getOneRandomFact, FactBlock } from "@entities/Fact"
import { SeasonSlider } from "@features/SeasonSlider"
import { AnimeCardSlider } from "@features/AnimeCardSlider"
import { GenreBlockSlider } from "@features/GenreBlockSlider"
import {
  FastPageBlock,
  UserAnimeSlider,
  homePageStyles as st,
} from "@appData/home"
import { getHomeData } from "@appData/home/api"

const HomePage = async () => {
  const homeData = await getHomeData()
  const fact = await getOneRandomFact()

  return (
    <div className={st.root}>
      <div className={st.seasonWrapper}>
        <SeasonSlider items={homeData.seasonAnimes} className={st.sliders} />
      </div>
      <UserAnimeSlider />
      <FastPageBlock />
      <div className={st.row}>
        <LinkLabel
          label="Новые серии"
          linkText="Смотреть все"
          href="/catalog?sort=dates&status=ongoing"
        />
        <AnimeCardSlider items={homeData.newSeriesAnimes} isCatalogSliderOn />
      </div>
      <div className={st.row}>
        <LinkLabel
          label="Самое популярное"
          linkText="Смотреть все"
          href="/catalog?sort=scores"
        />
        <AnimeCardSlider
          items={homeData.bestAnimes}
          isTwoRows
          isCatalogSliderOn
        />
      </div>
      <div className={st.row}>
        <LinkLabel
          label="Популярные жанры"
          linkText="Смотреть все жанры"
          href="/genres"
        />
        <GenreBlockSlider items={homeData.homeGenres} />
      </div>
      <FactBlock fact={fact} />
    </div>
  )
}

export default HomePage
