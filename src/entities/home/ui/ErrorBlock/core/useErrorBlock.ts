import { IErrorBlockProps } from '../types/IErrorBlockProps'

const useErrorBlock = (props: IErrorBlockProps) => {
  const { error } = props

  return { error }
}

export { useErrorBlock }
