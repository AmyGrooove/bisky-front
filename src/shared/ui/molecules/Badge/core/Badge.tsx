import { cloneElement } from 'react'

import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'

import { TBadgeProps } from '../types/TBadgeProps'

import { useBadge } from './useBadge'
import st from './Badge.module.scss'

const Badge = (props: TBadgeProps) => {
  const {
    children,
    icon,
    className,
    iconText,
    variant,
    isCustomColor,
    isCustomTextColor,
  } = useBadge(props)

  return (
    <div
      className={cn(st.root, className, st[`root_${variant}`], {
        [st.root_onlyIcon]: !children && !iconText,
        [st.root_defaultColor]: !isCustomColor,
      })}
    >
      <div className={st.iconWrapper}>
        {icon &&
          cloneElement(icon, {
            className: cn(st.icon, { [st.icon_custom]: isCustomTextColor }),
          })}
        {children && (
          <Text
            className={cn(st.children, {
              [st.children_custom]: isCustomTextColor,
            })}
            weight={iconText ? '400' : '700'}
          >
            {children}
          </Text>
        )}
      </div>
      {iconText && (
        <Text
          weight="700"
          className={cn(st.iconText, {
            [st.iconText_custom]: isCustomTextColor,
          })}
        >
          {iconText}
        </Text>
      )}
    </div>
  )
}

export { Badge }
