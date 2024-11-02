import { IFooterProps } from "../types/IFooterProps"

const useFooter = (props: IFooterProps) => {
  const { className, ...otherProps } = props

  return { className, otherProps }
}

export { useFooter }
