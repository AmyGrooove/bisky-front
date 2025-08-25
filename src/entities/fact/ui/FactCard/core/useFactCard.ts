import { IFactCardProps } from '../types/IFactCardProps'

const useFactCard = (props: IFactCardProps) => {
  const {
    text,
    sourceLink = null,
    author = null,
    className,
    variant = 'big',
  } = props

  return { text, sourceLink, author, className, variant }
}

export { useFactCard }
