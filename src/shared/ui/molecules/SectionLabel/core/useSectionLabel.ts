import { useNavigationFallback } from '@shared/utils/hooks/useNavigationFallback'
import { useCallback } from 'react'

import { ISectionLabelProps } from '../types/ISectionLabelProps'

const useSectionLabel = (props: ISectionLabelProps) => {
  const {
    additionalOnClick,
    Icon = null,
    children,
    className,
    goBackClick,
  } = props

  const goBack = useNavigationFallback()

  const onClickHandler = useCallback(() => {
    ;(goBackClick ?? goBack)()
  }, [goBackClick, goBack])

  return { children, className, onClickHandler, Icon, additionalOnClick }
}

export { useSectionLabel }
