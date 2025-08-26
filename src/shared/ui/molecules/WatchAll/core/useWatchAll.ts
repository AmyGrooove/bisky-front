import { IWatchAllProps } from '../types/IWatchAllProps'

const useWatchAll = (props: IWatchAllProps) => {
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

export { useWatchAll }
