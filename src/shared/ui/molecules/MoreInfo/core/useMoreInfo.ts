import { IMoreInfoProps } from '../types/IMoreInfoProps'

const useMoreInfo = (props: IMoreInfoProps) => {
  const {
    children,
    label = 'развернуть',
    className,
    variant = 'big',
    ariaLabel,
  } = props

  return { children, label, className, variant, ariaLabel }
}

export { useMoreInfo }
