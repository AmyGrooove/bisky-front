import { ILabelProps } from '../types/ILabelProps'

const useLabel = (props: ILabelProps) => {
  const { children, variant = 'big', link, className } = props

  return { children, variant, link, className }
}

export { useLabel }
