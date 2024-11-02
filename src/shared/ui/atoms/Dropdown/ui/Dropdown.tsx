"use client"

import { cloneElement, forwardRef } from "react"

import { cn } from "@shared/utils/functions"

import { IDropdownProps } from "../types/IDropdownProps"
import { IDropdownRef } from "../types/IDropdownRef"

import st from "./Dropdown.module.scss"
import { useDropdown } from "./useDropdown"

const Dropdown = forwardRef<IDropdownRef, IDropdownProps>((props, ref) => {
  const {
    rootRef,
    otherProps,
    className,
    isDisabled,
    isDropdownOpened,
    closeMenu,
    setIsDropdownOpened,
    callComponent,
    children,
    isDropdownClosing,
  } = useDropdown(props, ref)

  return (
    <div ref={rootRef} {...otherProps} className={cn(st.root, className)}>
      <div
        onClick={() =>
          isDisabled
            ? {}
            : isDropdownOpened
              ? closeMenu()
              : setIsDropdownOpened(true)
        }
      >
        {cloneElement(callComponent)}
      </div>
      {isDropdownOpened &&
        !isDisabled &&
        cloneElement(children, {
          className: cn(children.props.className, st.dropdown, {
            [st.dropdown_closing]: isDropdownClosing,
          }),
        })}
    </div>
  )
})
Dropdown.displayName = "Dropdown"

export { Dropdown }
