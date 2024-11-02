import { ILinkLabelProps } from "../types/ILinkLabelProps"

const useLinkLabel = (props: ILinkLabelProps) => {
  const { label, linkText, href, className, ...otherProps } = props

  return { label, linkText, href, className, otherProps }
}

export { useLinkLabel }
