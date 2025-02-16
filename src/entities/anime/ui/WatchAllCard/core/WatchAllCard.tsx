import Link from 'next/link'

import { Text } from '@shared/ui/atoms/Text'
import { cn } from '@shared/utils/functions'
import { MoveRightIcon } from '@shared/icons'

import { IWatchAllCardProps } from '../types/IWatchAllCardProps'

import st from './WatchAllCard.module.scss'
import { useWatchAllCard } from './useWatchAllCard'

const WatchAllCard = (props: IWatchAllCardProps) => {
  const { href, variant, className } = useWatchAllCard(props)

  return (
    <Link href={href} className={cn(st.root, className, st[`root_${variant}`])}>
      <MoveRightIcon className={st.icon} />
      <Text weight="700" size={variant === 'big' ? '20' : '12'}>
        Смотреть все
      </Text>
    </Link>
  )
}

export { WatchAllCard }
