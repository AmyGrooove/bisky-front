import { PlayerModule } from "@appData/anime"
import { getCurrentAnimeData } from "@appData/anime/api"
import {
  IPlayerPageProps,
  playerPageStyles as st,
} from "@appData/anime/subpages/player"
import { Skeleton } from "@shared/ui/atoms"

const PlayerPage = async (props: IPlayerPageProps) => {
  const {
    params: { animeId },
  } = props

  const animeData = await getCurrentAnimeData({ animeId })

  return (
    <div className={st.root}>
      <div className={st.loadingWrapper}>
        <Skeleton className={st.loading} />
      </div>
      <PlayerModule
        animeShikiId={animeData?.shikiId}
        className={st.iframe}
        isDefaultStyles={false}
      />
    </div>
  )
}

export default PlayerPage
