import { MoveRightIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { cn } from '@shared/utils/functions'
import { forwardRef } from 'react'

import { IWatchAllProps } from '../types/IWatchAllProps'

import { useWatchAll } from './useWatchAll'
import st from './WatchAll.module.scss'

const WatchAll = forwardRef<HTMLButtonElement, IWatchAllProps>((props, ref) => {
  const { label, type, variant, className, onClick } = useWatchAll(props)

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
    >
      <MoveRightIcon className={st.icon} />
      <Text className={st.text}>{label}</Text>
    </button>
  )
})

WatchAll.displayName = 'WatchAll'

export { WatchAll }
