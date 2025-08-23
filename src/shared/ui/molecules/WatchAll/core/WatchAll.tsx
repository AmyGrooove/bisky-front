import { MoveRightIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { cn } from '@shared/utils/functions'

import { IWatchAllProps } from '../types/IWatchAllProps'

import { useWatchAll } from './useWatchAll'
import st from './WatchAll.module.scss'

const WatchAll = (props: IWatchAllProps) => {
  const { type, variant, className, onClick } = useWatchAll(props)

  return (
    <button
      onClick={onClick}
      className={cn(
        st.root,
        st[`root_${type}`],
        st[`root_${variant}`],
        className,
      )}
    >
      <MoveRightIcon className={st.icon} />
      <Text className={st.text}>Смотреть все</Text>
    </button>
  )
}

export { WatchAll }
