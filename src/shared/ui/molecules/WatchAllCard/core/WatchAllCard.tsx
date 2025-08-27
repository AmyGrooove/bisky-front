import { MoveRightIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { cn } from '@shared/utils/functions'
import { forwardRef } from 'react'

import { IWatchAllCardProps } from '../types/IWatchAllCardProps'

import { useWatchAllCard } from './useWatchAllCard'
import st from './WatchAllCard.module.scss'

const WatchAllCard = forwardRef<HTMLButtonElement, IWatchAllCardProps>(
  (props, ref) => {
    const { label, type, variant, className, onClick, ariaLabel } =
      useWatchAllCard(props)

    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(
          st.root,
          st[`root_${type}`],
          st[`root_${variant}`],
          className,
        )}
        aria-label={ariaLabel ?? label}
      >
        <MoveRightIcon className={st.icon} />
        <Text className={st.text}>{label}</Text>
      </button>
    )
  },
)

WatchAllCard.displayName = 'WatchAllCard'

export { WatchAllCard }
