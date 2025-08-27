import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { forwardRef } from 'react'

import { TGlassButtonProps } from '../types/TGlassButtonProps'

import { useGlassButton } from './useGlassButton'
import st from './GlassButton.module.scss'

const GlassButton = forwardRef<HTMLButtonElement, TGlassButtonProps>(
  (props, ref) => {
    const { onClick, className, variant, isDisabled, otherProps } =
      useGlassButton(props)

    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(st.root, className, st[`root_${variant}`])}
        disabled={isDisabled}
      >
        {'children' in otherProps ? (
          <Text weight="700" className={st.children}>
            {otherProps.children}
          </Text>
        ) : (
          <otherProps.Icon className={st.icon} />
        )}
      </button>
    )
  },
)

GlassButton.displayName = 'GlassButton'

export { GlassButton }
