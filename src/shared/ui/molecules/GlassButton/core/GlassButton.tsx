import { cloneElement } from 'react'

import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms'

import { IGlassButtonProps } from '../types/IGlassButtonProps'

import { useGlassButton } from './useGlassButton'
import st from './GlassButton.module.scss'

const GlassButton = (props: IGlassButtonProps) => {
  const { children, onClick, className, variant, isDisabled, iconClassName } =
    useGlassButton(props)

  return (
    <button
      onClick={onClick}
      className={cn(st.root, className, st[`root_${variant}`])}
      disabled={isDisabled}
    >
      {typeof children === 'string' ? (
        <Text weight="700" size={variant === 'small' ? '24' : '40'}>
          {children}
        </Text>
      ) : (
        cloneElement(children, { className: cn(st.icon, iconClassName) })
      )}
    </button>
  )
}

export { GlassButton }
