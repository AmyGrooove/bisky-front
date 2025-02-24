import { ISectionLabelProps } from '../types/ISectionLabelProps'
import { useNavigationFallback } from '@shared/utils/hooks/useNavigationFallback'

const useSectionLabel = (props: ISectionLabelProps) => {
  const { onClick, Icon = null, children, className = null } = props

  const goBack = useNavigationFallback()

  const onClickHandler = onClick ?? goBack

  return { children, className, onClickHandler, Icon }
}

export { useSectionLabel }
