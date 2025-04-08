import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { getEmptyArray } from '@shared/utils/functions'

import st from './AnimeLoading.module.scss'

const AnimeLoading = () => {
  return (
    <>
      <Skeleton className={st.header} />
      <div className={st.animeInfo}>
        <Skeleton className={st.buttons} />
        <Skeleton className={st.list} />
        <Skeleton className={st.info} />
      </div>
      <Skeleton className={st.player} />
      <div className={st.row}>
        <Skeleton templates="label" />
        <div className={st.cards}>
          {getEmptyArray(12).map((_, index) => (
            <Skeleton key={index} templates="animeCard" />
          ))}
        </div>
      </div>
      <div className={st.row}>
        <Skeleton templates="label" />
        <div className={st.cards}>
          {getEmptyArray(12).map((_, index) => (
            <Skeleton key={index} className={st.screenshot} />
          ))}
        </div>
      </div>
    </>
  )
}

export { AnimeLoading }
