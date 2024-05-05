import { cloneElement } from "react"

import { Text } from "@shared/ui/atoms"
import { cn } from "@shared/utils/functions/cn"

import { IButtonProps } from "../types/IButtonProps"

import st from "./Button.module.scss"

const Button = (props: IButtonProps) => {
  const { children, leftIcon, rightIcon, className, textProps, ...otherProps } =
    props

  return (
    <button
      {...otherProps}
      className={cn(st.root, className, {
        [st.root_icon]: !!leftIcon || !!rightIcon,
      })}
    >
      {leftIcon &&
        cloneElement(leftIcon, {
          className: cn(st.icon, leftIcon.props.className, {
            [st.icon_only]: !children,
          }),
        })}
      {children && (
        <Text weight="700" {...textProps}>
          {children}
        </Text>
      )}
      {rightIcon &&
        cloneElement(rightIcon, {
          className: cn(st.icon, rightIcon.props.className, {
            [st.icon_only]: !children,
          }),
        })}
    </button>
  )
}

export { Button }
