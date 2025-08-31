import { cn, isNil } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { forwardRef, memo } from 'react'

import { TButtonProps } from '../types/TButtonProps'

import { useButton } from './useButton'
import st from './Button.module.scss'

const Button = memo(
  forwardRef<HTMLButtonElement, TButtonProps>((props, ref) => {
    const { children, onClick, Icon, className, variant, isDisabled, type } =
      useButton(props)

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={cn(st.root, className, st[`root_${variant}`])}
        disabled={isDisabled}
      >
        {!isNil(Icon) && <div className={st.icon}>{Icon}</div>}
        {!isNil(children) && (
          <Text weight="700" className={st.children}>
            {children}
          </Text>
        )}
      </button>
    )
  }),
)

Button.displayName = 'Button'

export { Button }
