import { cn, isNil } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { forwardRef } from 'react'

import { TBadgeProps } from '../types/TBadgeProps'

import { useBadge } from './useBadge'
import st from './Badge.module.scss'

const Badge = forwardRef<HTMLDivElement, TBadgeProps>((props, ref) => {
  const { children, Icon, className, variant } = useBadge(props)

  return (
    <div
      ref={ref}
      className={cn(st.root, className, st[`root_${variant}`], {
        [st.root_onlyIcon]: isNil(children),
      })}
    >
      {!isNil(Icon) && <Icon className={st.icon} />}
      {!isNil(children) && (
        <Text className={st.children} weight="700">
          {children}
        </Text>
      )}
    </div>
  )
})

Badge.displayName = 'Badge'

export { Badge }
