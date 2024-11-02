import { IFactBlockProps } from "../types/IFactBlockProps"

const useFactBlock = (props: IFactBlockProps) => {
  const { fact, className, ...otherProps } = props

  return { fact, className, otherProps }
}

export { useFactBlock }
