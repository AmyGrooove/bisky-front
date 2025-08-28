import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { cn, getEmptyArray } from '@shared/utils/functions'

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
        <div key={index} className={cn(st.row, st[`row_${currentVariant}`])}>
          <Skeleton
            variant={currentVariant}
            templates="sectionLabel"
            isLinkEnabled
          />
          <div
            className={cn(st.animeCards, st[`animeCards_${currentVariant}`])}
          >
            {getEmptyArray(12).map((_, index) => (
              <Skeleton
                key={index}
                variant={currentVariant}
                templates="animeCard"
              />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export { MainLoading }
