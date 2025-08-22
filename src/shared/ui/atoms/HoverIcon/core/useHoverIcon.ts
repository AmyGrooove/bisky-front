import { IHoverIconProps } from '../types/IHoverIconProps'

const useHoverIcon = (props: IHoverIconProps) => {
  const {
    Icon,
    variant = 'barIcon',
    className,
    isSelected = false,
    onClick,
  } = props

  return { Icon, variant, className, isSelected, onClick }
}

export { useHoverIcon }
