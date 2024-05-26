import {
  animeListLoadingStyles as st,
  UserAnimeListLoading,
} from "@appData/profile/subpages/animeList"
import { Skeleton } from "@shared/ui/atoms"

const AnimeListLoading = () => {
  return (
    <div className={st.root}>
      <Skeleton className={st.header} />
      <UserAnimeListLoading />
    </div>
  )
}

export default AnimeListLoading
