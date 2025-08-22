import { IWatchAllProps } from '../types/IWatchAllProps'

const useWatchAll = (props: IWatchAllProps) => {
  const { type = 'anime', variant = 'big', className, onClick } = props

  return { type, variant, className, onClick }
}

export { useWatchAll }
