import { cn, isNil } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { forwardRef } from 'react'

import { IBigButtonProps } from '../types/IBigButtonProps'

import { useBigButton } from './useBigButton'
import st from './BigButton.module.scss'

const BigButton = forwardRef<HTMLButtonElement, IBigButtonProps>(
  (props, ref) => {
    const {
      onClick,
      children,
      Icon,
      className,
      variant,
      isDisabled,
      iconText,
      type,
    } = useBigButton(props)

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={cn(st.root, className, st[`root_${variant}`])}
        disabled={isDisabled}
      >
        <div className={st.iconWrapper}>
          <Icon className={st.icon} />
          {!isNil(iconText) && (
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
  },
)

BigButton.displayName = 'BigButton'

export { BigButton }
