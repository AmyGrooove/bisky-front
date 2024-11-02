import { ILinkTabsProps } from "../types/ILinkTabsProps"

const useLinkTabs = (props: ILinkTabsProps) => {
  const { items = [], className, ...otherProps } = props

  return { items, className, otherProps }
}

export { useLinkTabs }
