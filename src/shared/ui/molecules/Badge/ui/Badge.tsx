import { cloneElement } from "react"

import { Text } from "@shared/ui/atoms/Text/ui/Text"
import { cn } from "@shared/utils/functions/cn"

import { IBadgeProps } from "../types/IBadgeProps"
import { getScoreStatus } from "../functions/getScoreStatus"

import st from "./Badge.modules.scss"

const Badge = (props: IBadgeProps) => {
  const {
    children,
    iconLeft,
    iconRight,
    className,
    isScoreStatus = false,
    ...otherProps
  } = props

  return (
    <div
      {...otherProps}
      className={cn(st.root, className, {
        [st.root_icon]: !!iconLeft || !!iconRight,
        [st[`root_${getScoreStatus(children!)}`]]: isScoreStatus && !!children,
      })}
    >
      {iconLeft && cloneElement(iconLeft, { className: st.icon })}
      {children && <Text weight="700">{children}</Text>}
      {iconRight && cloneElement(iconRight, { className: st.icon })}
    </div>
  )
}

export { Badge }
