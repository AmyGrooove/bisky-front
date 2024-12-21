import { Text } from "@shared/ui/atoms"
import { cn } from "@shared/utils/functions/cn"

import { IButtonProps } from "../types/IButtonProps"

import st from "./Button.module.scss"
import { useButton } from "./useButton"

const Button = (props: IButtonProps) => {
  const {
    children,
    renderLeftIcon,
    renderRightIcon,
    className,
    textProps,
    otherProps,
  } = useButton(props)

  return (
    <button
      {...otherProps}
      className={cn(st.root, className, {
        [st.root_icon]: !!renderLeftIcon || !!renderRightIcon,
      })}
    >
      {renderLeftIcon &&
        renderLeftIcon({
          className: cn(st.icon, { [st.icon_only]: !children }),
        })}
      {children && (
        <Text weight="700" {...textProps}>
          {children}
        </Text>
      )}
      {renderRightIcon &&
        renderRightIcon({
          className: cn(st.icon, { [st.icon_only]: !children }),
        })}
    </button>
  )
}

export { Button }
