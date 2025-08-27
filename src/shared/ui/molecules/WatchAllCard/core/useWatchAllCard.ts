import { IWatchAllCardProps } from '../types/IWatchAllCardProps'

const useWatchAllCard = (props: IWatchAllCardProps) => {
  const {
    label = 'Смотреть все',
    type = 'anime',
    variant = 'big',
    className,
    onClick,
    ariaLabel,
  } = props

  return { label, type, variant, className, onClick, ariaLabel }
}

export { useWatchAllCard }
