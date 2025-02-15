import { cloneElement } from 'react'

import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms'

import { TButtonProps } from '../types/TButtonProps'

import { useButton } from './useButton'
import st from './Button.module.scss'

const Button = (props: TButtonProps) => {
  const { children, onClick, icon, className, variant, isDisabled } =
    useButton(props)

  return (
    <button
      onClick={onClick}
      className={cn(st.root, className, st[`root_${variant}`])}
      disabled={isDisabled}
    >
      {icon && cloneElement(icon, { className: st.icon })}
      {children && (
        <Text weight="700" size={variant === 'small' ? '12' : '16'}>
          {children}
        </Text>
      )}
    </button>
  )
}

export { Button }
