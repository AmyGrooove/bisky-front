import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'

import { TButtonProps } from '../types/TButtonProps'

import { useButton } from './useButton'
import st from './Button.module.scss'

const Button = (props: TButtonProps) => {
  const {
    children,
    onClick,
    Icon,
    className,
    variant,
    isDisabled,
    isCustomColor,
  } = useButton(props)

  return (
    <button
      onClick={onClick}
      className={cn(st.root, className, st[`root_${variant}`], {
        [st.root_defaultColor]: !isCustomColor,
      })}
      disabled={isDisabled}
    >
      {Icon && Icon({ className: st.icon })}
      {children && (
        <Text weight="700" className={st.children}>
          {children}
        </Text>
      )}
    </button>
  )
}

export { Button }
