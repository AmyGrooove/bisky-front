import { cn } from '@shared/utils/functions'

import { IDividerProps } from '../types/IDividerProps'

import { useDivider } from './useDivider'
import st from './Divider.module.scss'
import { forwardRef, memo } from 'react'

const Divider = memo(
  forwardRef<HTMLDivElement, IDividerProps>((props, ref) => {
    const { variant, className } = useDivider(props)

    return (
      <div ref={ref} className={cn(st.root, st[`root_${variant}`], className)}>
        <div className={st.divider} />
      </div>
    )
  }),
)

Divider.displayName = 'Divider'

export { Divider }
