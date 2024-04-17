import { cloneElement } from "react"

import { Text } from "@shared/ui/atoms"
import { cn } from "@shared/utils/functions/cn"

import { IBadgeProps } from "../types/IBadgeProps"
import { getScoreStatus } from "../functions/getScoreStatus"

import st from "./Badge.module.scss"

const Badge = (props: IBadgeProps) => {
  const {
    children,
    leftIcon,
    rightIcon,
    className,
    isScoreStatus = false,
    variant = "small",
    isDefaultTextColor = true,
    ...otherProps
  } = props

  return (
    <div
      {...otherProps}
      className={cn(st.root, className, st[`root_${variant}`], {
        [st.root_icon]: !!leftIcon || !!rightIcon,
        [st[`root_${getScoreStatus(children!)}`]]: isScoreStatus && !!children,
      })}
    >
      {leftIcon && cloneElement(leftIcon, { className: st.icon })}
      {children && (
        <Text
          isDefaultColor={isDefaultTextColor}
          size={variant === "small" ? "16" : "20"}
          weight="700"
          className={st.text}
        >
          {children}
        </Text>
      )}
      {rightIcon && cloneElement(rightIcon, { className: st.icon })}
    </div>
  )
}

export { Badge }
