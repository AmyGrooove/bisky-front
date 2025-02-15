import { useRouter } from 'next/navigation'

import { ISectionLabelProps } from '../types/ISectionLabelProps'

const useSectionLabel = (props: ISectionLabelProps) => {
  const { onClick, icon = null, children, className = null } = props

  const { back } = useRouter()

  const onClickHandler = () => onClick ?? back

  return { children, className, onClickHandler, icon }
}

export { useSectionLabel }
