import { cloneElement } from 'react'

import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms'

import { TBadgeProps } from '../types/TBadgeProps'

import { useBadge } from './useBadge'
import st from './Badge.module.scss'

const Badge = (props: TBadgeProps) => {
  const { children, icon, className, iconText, variant } = useBadge(props)

  return (
    <div
      className={cn(st.root, className, st[`root_${variant}`], {
        [st.root_onlyIcon]: !children && !iconText,
      })}
    >
      <div className={st.iconWrapper}>
        {icon && cloneElement(icon, { className: st.icon })}
        {children && (
          <Text
            weight={iconText ? '400' : '700'}
            size={variant === 'small' ? '12' : '16'}
          >
            {children}
          </Text>
        )}
      </div>
      {iconText && (
        <Text weight="700" size={variant === 'small' ? '12' : '16'}>
          {iconText}
        </Text>
      )}
    </div>
  )
}

export { Badge }
