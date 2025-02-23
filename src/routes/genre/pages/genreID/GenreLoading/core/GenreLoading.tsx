import { Skeleton } from '@shared/ui/atoms/Skeleton'
import st from './GenreLoading.module.scss'
import { getEmptyArray } from '@shared/utils/functions'

const GenreLoading = async () => {
  return (
    <>
      <Skeleton className={st.header} />
      <div className={st.main}>
        {getEmptyArray(20).map((_, index) => (
          <Skeleton key={index} templates="animeCard" />
        ))}
      </div>
    </>
  )
}

export { GenreLoading }
