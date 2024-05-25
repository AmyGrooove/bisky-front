import { Skeleton } from "@shared/ui/atoms"
import { playerLoadingStyles as st } from "@appData/anime/subpages/player"

const PlayerLoading = () => (
  <div className={st.root}>
    <Skeleton className={st.loading} />
  </div>
)

export default PlayerLoading
