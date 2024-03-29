import { LinkLabel } from "@shared/ui/molecules/LinkLabel"
import st from "@appStyles/home.module.scss"
import { GenreBlockSlider } from "@features/GenreBlockSlider/ui/GenreBlockSlider"
import { getOneRandomFact, FactBlock } from "@entities/Fact"
import { getGenresQL } from "@entities/Genre"

const Home = async () => {
  const genres = await getGenresQL()
  const fact = await getOneRandomFact()

  return (
    <div className={st.root}>
      <div className={st.row}>
        <LinkLabel label="Жанры" linkText="Смотреть все" href="#" />
        <GenreBlockSlider items={genres} />
      </div>
      <FactBlock fact={fact} />
    </div>
  )
}

export default Home
