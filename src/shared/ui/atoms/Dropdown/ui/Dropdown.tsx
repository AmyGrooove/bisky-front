"use client"

import {
  cloneElement,
  forwardRef,
  RefObject,
  useImperativeHandle,
  useRef,
  useState,
} from "react"

import { cn } from "@shared/utils/functions"
import { useClickOutside } from "@shared/utils/hooks"

import { IDropdownProps } from "../types/IDropdownProps"

import st from "./Dropdown.module.scss"
import { IDropdownRef } from "../types/IDropdownRef"

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
      {cloneElement(callComponent, {
        onClick: () =>
          isDisabled
            ? {}
            : isDropdownOpened
              ? closeMenu()
              : setIsDropdownOpened(true),
      })}
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
function useImperativeHandler(
  dropdownRef: RefObject<HTMLDivElement>,
  closeMenu: () => void,
) {
  throw new Error("Function not implemented.")
}
