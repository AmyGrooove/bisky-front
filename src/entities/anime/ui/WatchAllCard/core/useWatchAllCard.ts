import { IWatchAllCardProps } from '../types/IWatchAllCardProps'

const useWatchAllCard = (props: IWatchAllCardProps) => {
  const { href, className = null } = props

  return { href, className }
}

export { useWatchAllCard }
