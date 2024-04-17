"use client"

import { useState } from "react"

import { cn } from "@shared/utils/functions"
import { Text } from "@shared/ui/atoms"
import { ArrowIcon } from "@shared/icons"

import { ICollapseProps } from "../types/ICollapseProps"

import st from "./Collapse.module.scss"

const Collapse = (props: ICollapseProps) => {
  const {
    children,
    label,
    isDefaultOpened = false,
    className,
    ...otherProps
  } = props

  const [isCollapseOpened, setIsCollapseOpened] = useState(isDefaultOpened)

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <div
        className={st.collapse}
        onClick={() => setIsCollapseOpened((prevState) => !prevState)}
      >
        <Text weight="700" size="20">
          {label}
        </Text>
        <ArrowIcon
          className={cn(st.collapseIcon, {
            [st.collapseIcon_opened]: isCollapseOpened,
          })}
        />
      </div>
      {isCollapseOpened && <>{children}</>}
    </div>
  )
}

export { Collapse }
