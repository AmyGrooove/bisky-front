import { IBigButtonProps } from '../types/IBigButtonProps'

const useBigButton = (props: IBigButtonProps) => {
  const {
    onClick,
    children,
    icon,
    className = null,
    variant = 'small',
    isDisabled = false,
    iconText = null,
  } = props

  return { onClick, children, icon, className, variant, isDisabled, iconText }
}

export { useBigButton }
