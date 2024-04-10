import Link from "next/link"

import { Text } from "@shared/ui/atoms/Text"
import { cn } from "@shared/utils/functions"

import { ILinkTabsProps } from "../types/ILinkTabsProps"

import st from "./LinkTabs.module.scss"

const LinkTabs = (props: ILinkTabsProps) => {
  const { items = [], className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      {items.map(
        ({ name, isActive = false, isDisabled = false, ...otherItemProps }) => (
          <Link
            {...otherItemProps}
            key={name}
            className={cn(st.item, {
              [st.item_active]: isActive,
              [st.item_disabled]: isDisabled,
            })}
          >
            <Text as="span" size="24" weight="700">
              {name}
            </Text>
          </Link>
        ),
      )}
    </div>
  )
}

export { LinkTabs }
