import { cn, isNil } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { forwardRef } from 'react'

import { TButtonProps } from '../types/TButtonProps'

import { useButton } from './useButton'
import st from './Button.module.scss'

const Button = forwardRef<HTMLButtonElement, TButtonProps>((props, ref) => {
  const {
    children,
    onClick,
    Icon,
    className,
    variant,
    isDisabled,
    type,
    ariaLabel,
  } = useButton(props)

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={cn(st.root, className, st[`root_${variant}`])}
      disabled={isDisabled}
      aria-label={ariaLabel}
    >
      {!isNil(Icon) && <Icon className={st.icon} />}
      {!isNil(children) && (
        <Text weight="700" className={st.children}>
          {children}
        </Text>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
