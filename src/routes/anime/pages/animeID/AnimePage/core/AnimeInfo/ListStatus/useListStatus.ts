import { useMemo } from 'react'

import { IAnimeSectionProps } from '../../../types/IAnimeSectionProps'
import { badgeItems } from '../../../static/badgeItems'

const useListStatus = (props: IAnimeSectionProps) => {
  const {
    data: {
      listStatusCounts: { added, watching, completed, dropped },
    },
  } = props

  const badgeElements = useMemo(
    () => badgeItems(added, watching, completed, dropped),
    [added, watching, completed, dropped],
  )

  return { added, watching, completed, dropped, badgeElements }
}

export { useListStatus }
