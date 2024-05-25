"use client"

import {
  cloneElement,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react"

import { cn } from "@shared/utils/functions"
import { useClickOutside } from "@shared/utils/hooks"

import { IDropdownProps } from "../types/IDropdownProps"

import st from "./Dropdown.module.scss"

const Dropdown = forwardRef(function Dropdown(props: IDropdownProps) {
  const {
    callComponent,
    children,
    className,
    isDisabled = false,
    dropdownRef,
    ...otherProps
  } = props

  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const [isDropdownClosing, setIsDropdownClosing] = useState(false)

  const rootRef = useRef<HTMLDivElement>(null)

  const closeMenu = () => {
    setIsDropdownClosing(true)

    setTimeout(() => {
      setIsDropdownOpened(false)
      setIsDropdownClosing(false)
    }, 100)
  }

  useImperativeHandle(dropdownRef, () => ({ closeMenu }), [])

  useClickOutside([rootRef], closeMenu)

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

export { Dropdown }
