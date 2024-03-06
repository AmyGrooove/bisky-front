import { cloneElement } from "react"

import { Text } from "@shared/ui/atoms/Text/ui/Text"
import { cn } from "@shared/utils/functions/cn"

import { IBadgeProps } from "../types/IBadgeProps"

import st from "./Badge.modules.scss"

const Badge = (props: IBadgeProps) => {
  const { className, text, iconLeft, iconRight } = props

  const isIconButton = !text && (iconRight || iconLeft)

  return (
    <div className={cn(st.badge, className, isIconButton && st.badge_icon)}>
      {iconLeft && cloneElement(iconLeft)}
      {text && (
        <Text size="20" weight="700">
          {text}
        </Text>
      )}
      {iconRight && cloneElement(iconRight)}
    </div>
  )
}

export { Badge }
