"use client"

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
      {isVisible && (
        <div
          {...getFloatingProps()}
          className={cn(st.root, { [st.root_closing]: isClosing })}
          ref={refs.setFloating}
          style={floatingStyles}
        >
          {typeof hintElement === "string" ? (
            <Text className={st.text}>{hintElement}</Text>
          ) : (
            hintElement
          )}
        </div>
      )}
    </>
  )
}

export { Hint }
