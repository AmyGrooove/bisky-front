import { cloneElement } from "react"

import { Text } from "@shared/ui/atoms/Text/ui/Text"
import { cn } from "@shared/utils/functions/cn"

import { IButtonProps } from "../types/IButtonProps"

import st from "./Button.module.scss"

const Button = (props: IButtonProps) => {
  const { children, iconLeft, iconRight } = props

  const isIconButton = !children && (iconRight || iconLeft)
  const isTextAndIconButton = children && (iconRight || iconLeft)

  return (
    <button
      {...props}
      className={cn(
        st.button,
        isIconButton && st.button_icon,
        isTextAndIconButton && st.button_text_icon,
      )}
    >
      {iconLeft && cloneElement(iconLeft)}
      {children && (
        <Text size="20" weight="400">
          {children}
        </Text>
      )}
      {iconRight && cloneElement(iconRight)}
    </button>
  )
}

export { Button }
