import { TButtonProps } from '../types/TButtonProps'

const useButton = (props: TButtonProps) => {
  const {
    onClick,
    children = null,
    icon = null,
    className = null,
    variant = 'small',
    isDisabled = false,
  } = props

  return { onClick, children, icon, className, variant, isDisabled }
}

export { useButton }
