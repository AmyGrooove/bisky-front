import { Skeleton } from "@shared/ui/atoms"
import { genresLoadingStyles as st } from "@appData/genres"

const GenresLoading = () => (
  <div className={st.root}>
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
    <Skeleton className={st.genre} />
  </div>
)

export default GenresLoading
