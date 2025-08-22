import { cn } from '@shared/utils/functions'

import { IHoverIconProps } from '../types/IHoverIconProps'

import { useHoverIcon } from './useHoverIcon'
import st from './HoverIcon.module.scss'

const HoverIcon = (props: IHoverIconProps) => {
  const { Icon, variant, className, isSelected, onClick } = useHoverIcon(props)

  return (
    <Icon
      onClick={onClick}
      className={cn(
        st.root,
        st[`root_${variant}`],
        { [st.root_selected]: isSelected },
        className,
      )}
    />
  )
}

export { HoverIcon }
