import { AnimeHeader } from "@appData/animePage"
import st from "@appData/animePage/styles/animePage.module.scss"
import { IAnimePageProps } from "@appData/animePage/types/IAnimePageProps"
import { getOneAnimeQL } from "@entities/Anime"

const AnimePage = async (props: IAnimePageProps) => {
  const {
    params: { animeId },
  } = props

  const animeData = await getOneAnimeQL(animeId)

  return (
    <div className={st.root}>
      <AnimeHeader animeData={animeData} className={st.animeHeader} />
    </div>
  )
}

export default AnimePage
