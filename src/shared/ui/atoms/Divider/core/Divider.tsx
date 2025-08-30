import { cn, isNil } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import { IDividerProps } from '../types/IDividerProps'

import { useDivider } from './useDivider'
import st from './Divider.module.scss'

const Divider = memo(
  forwardRef<HTMLDivElement, IDividerProps>((props, ref) => {
    const { variant, className, children } = useDivider(props)

    return (
      <div ref={ref} className={cn(st.root, st[`root_${variant}`], className)}>
        <div className={st.divider} />
        {!isNil(children) && (
          <>
            {children}
            <div className={st.divider} />
          </>
        )}
      </div>
    )
  }),
)

Divider.displayName = 'Divider'

export { Divider }
