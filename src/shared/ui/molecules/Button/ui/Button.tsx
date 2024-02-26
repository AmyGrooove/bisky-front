import { cloneElement } from "react"

import { Text } from "@/shared/ui/atoms/Text/ui/Text"
import { cn } from "@/shared/utils/functions/cn"

import { IButtonProps } from "../types/IButtonProps"

import st from "./Button.module.scss"

const Button = (props: IButtonProps) => {
  const {
    children = "Button",
    onClick,
    disabled = false,
    iconLeft,
    iconRight,
  } = props

  return (
    <button
      className={cn(st.button, (iconRight || iconLeft) && st["button--icon"])}
      onClick={onClick}
      disabled={disabled}
    >
      {iconLeft && cloneElement(iconLeft)}
      <Text size="size-20" weight="weight-400">
        {children}
      </Text>
      {iconRight && cloneElement(iconRight)}
    </button>
  )
}

export { Button }
