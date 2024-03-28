import { cloneElement } from "react"

import { Text } from "@shared/ui/atoms/Text/ui/Text"
import { cn } from "@shared/utils/functions/cn"

import { IButtonProps } from "../types/IButtonProps"

import st from "./Button.module.scss"

const Button = (props: IButtonProps) => {
  const { children, iconLeft, iconRight, className, ...otherProps } = props

  return (
    <button
      {...otherProps}
      className={cn(st.root, className, {
        [st.root_icon]: !!iconLeft || !!iconRight,
      })}
    >
      {iconLeft &&
        cloneElement(iconLeft, {
          className: cn(st.icon, { [st.icon_only]: !children }),
        })}
      {children && <Text weight="700">{children}</Text>}
      {iconRight &&
        cloneElement(iconRight, {
          className: cn(st.icon, { [st.icon_only]: !children }),
        })}
    </button>
  )
}

export { Button }
