import { IFactCardProps } from '../types/IFactCardProps'

const useFactCard = (props: IFactCardProps) => {
  const {
    text,
    source = null,
    author = null,
    className,
    variant = 'big',
  } = props

  return { text, source, author, className, variant }
}

export { useFactCard }
