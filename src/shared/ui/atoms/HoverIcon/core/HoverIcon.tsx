import { forwardRef, memo } from 'react'
import { cn } from '@shared/utils/functions'

import { IHoverIconProps } from '../types/IHoverIconProps'

import { useHoverIcon } from './useHoverIcon'
import st from './HoverIcon.module.scss'

const HoverIcon = memo(
  forwardRef<SVGSVGElement, IHoverIconProps>((props, ref) => {
    const { Icon, variant, className, isSelected, onClick } =
      useHoverIcon(props)

    return (
      <Icon
        ref={ref}
        onClick={onClick}
        className={cn(
          st.root,
          st[`root_${variant}`],
          { [st.root_selected]: isSelected },
          className,
        )}
      />
    )
  }),
)

HoverIcon.displayName = 'HoverIcon'

export { HoverIcon }
