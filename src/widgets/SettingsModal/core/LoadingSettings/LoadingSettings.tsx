import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { getEmptyArray } from '@shared/utils/functions'

import st from './LoadingSettings.module.scss'

const LoadingSettings = () => {
  return (
    <div className={st.root}>
      {getEmptyArray(4).map((_, index) => (
        <Skeleton key={index} className={st.element} />
      ))}
    </div>
  )
}

export { LoadingSettings }
