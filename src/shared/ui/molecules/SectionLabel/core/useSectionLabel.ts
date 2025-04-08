import { useNavigationFallback } from '@shared/utils/hooks/useNavigationFallback'

import { ISectionLabelProps } from '../types/ISectionLabelProps'

const useSectionLabel = (props: ISectionLabelProps) => {
  const { onClick, Icon = null, children, className = null } = props

  const goBack = useNavigationFallback()

  const onClickHandler = onClick ?? goBack

  return { children, className, onClickHandler, Icon }
}

export { useSectionLabel }
