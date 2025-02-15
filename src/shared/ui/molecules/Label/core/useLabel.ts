import { ILabelProps } from '../types/ILabelProps'

const useLabel = (props: ILabelProps) => {
  const {
    children,
    className = null,
    linkText = null,
    href = null,
    variant = 'small',
  } = props

  return { children, className, linkText, href, variant }
}

export { useLabel }
