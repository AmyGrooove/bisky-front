import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { getEmptyArray } from '@shared/utils/functions'

import st from './MainLoading.module.scss'

const MainLoading = () => {
  return (
    <>
      <div className={st.season}>
        {getEmptyArray(3).map((_, index) => (
          <Skeleton key={index} templates="season" />
        ))}
      </div>
      {getEmptyArray(4).map((_, index) => (
        <div key={index} className={st.row}>
          <Skeleton templates="label" />
          <div className={st.animeCards}>
            {getEmptyArray(12).map((_, index) => (
              <Skeleton key={index} templates="animeCard" />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export { MainLoading }
