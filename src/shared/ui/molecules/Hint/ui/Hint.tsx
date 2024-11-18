"use client"

import { createPortal } from "react-dom"

import { cn } from "@shared/utils/functions"
import { Text } from "@shared/ui/atoms"

import { IHintProps } from "../types/IHintProps"

import { useHint } from "./useHint"
import st from "./Hint.module.scss"

const Hint = (props: IHintProps) => {
  const {
    children,
    hintElement,
    refs,
    getReferenceProps,
    floatingStyles,
    getFloatingProps,
    isVisible,
    isClosing,
    showHint,
    hideHint,
    isText,
    cancelHideHint,
    hintClassName,
  } = useHint(props)

  return (
    <>
      <div
        {...getReferenceProps()}
        ref={refs.setReference}
        onMouseEnter={showHint}
        onMouseLeave={hideHint}
      >
        {children}
      </div>
      {isVisible &&
        createPortal(
          <div
            {...getFloatingProps()}
            className={cn(st.root, hintClassName, {
              [st.root_closing]: isClosing,
            })}
            ref={refs.setFloating}
            style={floatingStyles}
            onMouseEnter={isText ? () => {} : cancelHideHint}
            onMouseLeave={isText ? () => {} : hideHint}
          >
            {isText ? (
              <Text className={st.text}>{hintElement}</Text>
            ) : (
              hintElement
            )}
          </div>,
          document.body,
        )}
    </>
  )
}

export { Hint }
