import { cloneElement } from 'react'

import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms'

import { IBigButtonProps } from '../types/IBigButtonProps'

import { useBigButton } from './useBigButton'
import st from './BigButton.module.scss'

const BigButton = (props: IBigButtonProps) => {
  const { onClick, children, icon, className, variant, isDisabled, iconText } =
    useBigButton(props)

  return (
    <button
      onClick={onClick}
      className={cn(st.root, className, st[`root_${variant}`])}
      disabled={isDisabled}
    >
      <div className={st.iconWrapper}>
        {cloneElement(icon, { className: st.icon })}
        {iconText && (
          <Text weight="700" size={variant === 'small' ? '24' : '32'}>
            {iconText}
          </Text>
        )}
      </div>
      <Text weight="700" size={variant === 'small' ? '12' : '20'}>
        {children}
      </Text>
    </button>
  )
}

export { BigButton }
