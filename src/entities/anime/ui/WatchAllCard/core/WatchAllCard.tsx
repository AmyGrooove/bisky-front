import Link from 'next/link'

import { Text } from '@shared/ui/atoms/Text'
import { cn } from '@shared/utils/functions'
import { MoveRightIcon } from '@shared/icons'

import { IWatchAllCardProps } from '../types/IWatchAllCardProps'

import st from './WatchAllCard.module.scss'
import { useWatchAllCard } from './useWatchAllCard'

const WatchAllCard = (props: IWatchAllCardProps) => {
  const { href, className } = useWatchAllCard(props)

  return (
    <Link href={href} className={cn(st.root, className)}>
      <MoveRightIcon className={st.icon} />
      <Text weight="700" className={st.text}>
        Смотреть все
      </Text>
    </Link>
  )
}

export { WatchAllCard }
