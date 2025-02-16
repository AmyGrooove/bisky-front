import { IWatchAllCardProps } from '../types/IWatchAllCardProps'

const useWatchAllCard = (props: IWatchAllCardProps) => {
  const { href, variant = 'big', className = null } = props

  return {
    href,
    variant,
    className,
  }
}

export { useWatchAllCard }
