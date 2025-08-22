import { IHoverIconProps } from '../types/IHoverIconProps'

const useHoverIcon = (props: IHoverIconProps) => {
  const { Children, variant = 'barIcon', className } = props

  return { Children, variant, className }
}

export { useHoverIcon }
