import { cloneElement } from "react"

import { Text } from "@shared/ui/atoms/Text/ui/Text"
import { cn } from "@shared/utils/functions/cn"

import { IBadgeProps } from "../types/IBadgeProps"

import st from "./Badge.modules.scss"

const Badge = (props: IBadgeProps) => {
  const { children, iconLeft, iconRight } = props

  const isIconButton = !children && (iconRight || iconLeft)

  return (
    <div className={cn(st.badge, isIconButton && st.badge_icon)}>
      {iconLeft && cloneElement(iconLeft)}
      {children && (
        <Text size="20" weight="700">
          {children}
        </Text>
      )}
      {iconRight && cloneElement(iconRight)}
    </div>
  )
}

export { Badge }
