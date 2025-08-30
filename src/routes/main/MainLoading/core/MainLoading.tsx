import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { getEmptyArray } from '@shared/utils/functions'

import st from './MainLoading.module.scss'
import { useMainLoading } from './useMainLoading'

const MainLoading = async () => {
  const { currentVariant } = await useMainLoading()

  return (
    <>
      <div className={st.season}>
        {getEmptyArray(3).map((_, index) => (
          <Skeleton
            key={index}
            variant={currentVariant}
            templates="seasonalAnimeCard"
          />
        ))}
      </div>
      {getEmptyArray(4).map((_, index) => (
        <Skeleton
          key={index}
          variant={currentVariant}
          templates="animeCardCarouselRow"
        />
      ))}
    </>
  )
}

export { MainLoading }
