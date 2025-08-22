import { cn } from '@shared/utils/functions'

import { IHoverIconProps } from '../types/IHoverIconProps'

import { useHoverIcon } from './useHoverIcon'
import st from './HoverIcon.module.scss'

const HoverIcon = (props: IHoverIconProps) => {
  const { Children, variant, className } = useHoverIcon(props)

  return <Children className={cn(st.root, st[`root_${variant}`], className)} />
}

export { HoverIcon }
