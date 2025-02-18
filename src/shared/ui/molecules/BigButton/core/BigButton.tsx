import { cloneElement } from 'react'

import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'

import { IBigButtonProps } from '../types/IBigButtonProps'

import { useBigButton } from './useBigButton'
import st from './BigButton.module.scss'

const BigButton = (props: IBigButtonProps) => {
  const {
    onClick,
    children,
    icon,
    className,
    variant,
    isDisabled,
    iconText,
    isCustomColor,
  } = useBigButton(props)

  return (
    <button
      onClick={onClick}
      className={cn(st.root, className, st[`root_${variant}`], {
        [st.root_defaultColor]: !isCustomColor,
      })}
      disabled={isDisabled}
    >
      <div className={st.iconWrapper}>
        {cloneElement(icon, { className: st.icon })}
        {iconText && (
          <Text weight="700" className={st.iconText}>
            {iconText}
          </Text>
        )}
      </div>
      <Text weight="700" className={st.children}>
        {children}
      </Text>
    </button>
  )
}

export { BigButton }
