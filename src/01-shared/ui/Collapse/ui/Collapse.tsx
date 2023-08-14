"use client"

import { cl } from "@/01-shared/utils"

import { useCollapse } from "../lib"

import styles from "./Collapse.module.scss"

interface ICollapse {
  children: string

  numberOfLines?: number
  lineHeight?: number
  className?: string
}

const Collapse = ({
  children,
  numberOfLines = 4,
  lineHeight = 24,
  className,
}: ICollapse) => {
  const { containerRef, isExpanded, showButton, handleMore } = useCollapse(
    numberOfLines,
    lineHeight,
  )

  return (
    <div className={cl(styles.collapse, className)}>
      <p
        ref={containerRef}
        style={{
          WebkitLineClamp: numberOfLines,
          lineHeight: lineHeight + "px",
        }}
        className={cl(
          styles.collapse__text,
          isExpanded && styles.collapse__text_expanded,
        )}
      >
        {children}
      </p>
      {showButton && (
        <button onClick={handleMore} className={styles.collapse__more}>
          {!isExpanded ? "Подробнее..." : "Скрыть"}
        </button>
      )}
    </div>
  )
}

export { Collapse }
