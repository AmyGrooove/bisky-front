import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { getEmptyArray } from '@shared/utils/functions'

import st from './FranchiseLoading.module.scss'

const FranchiseLoading = async () => {
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

export { FranchiseLoading }
