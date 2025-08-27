import { IWatchAllCardProps } from '../types/IWatchAllCardProps'

const useWatchAllCard = (props: IWatchAllCardProps) => {
  const {
    label = 'Смотреть все',
    type = 'anime',
    variant = 'big',
    className,
    onClick,
  } = props

  return { label, type, variant, className, onClick }
}

export { useWatchAllCard }
