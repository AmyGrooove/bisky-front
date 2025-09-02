import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { getEmptyArray } from '@shared/utils/functions'

import { useMenuLoading } from './useMenuLoading'
import st from './MenuLoading.module.scss'

const MenuLoading = async () => {
  const { currentVariant } = await useMenuLoading()

  return (
    <div className={st.root}>
      {/* TODO
      <Skeleton className={st.button} templates="bigButton" variant="big" /> */}
      <div className={st.buttonsWrapper}>
        {getEmptyArray(2).map((_, index) => (
          <Skeleton
            className={st.button}
            key={`row2${index}`}
            templates="bigButton"
            variant="big"
            isFlexShrinkEnabled={false}
          />
        ))}
      </div>
      <div className={st.buttonsWrapper}>
        {getEmptyArray(3).map((_, index) => (
          <Skeleton
            className={st.button}
            key={`row3${index}`}
            templates="bigButton"
            variant="small"
            isFlexShrinkEnabled={false}
          />
        ))}
      </div>
      <Skeleton templates="factCard" variant={currentVariant} />
    </div>
  )
}

export { MenuLoading }
