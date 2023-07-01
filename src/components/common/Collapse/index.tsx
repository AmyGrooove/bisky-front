"use client"

import { cl } from "@/utils"

import Button from "../Button"

import styles from "./index.module.scss"
import useCollapse from "./index.use"

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
        <Button
          variant="subtle"
          onClick={handleMore}
          className={styles.collapse__more}
        >
          {!isExpanded ? "Подробнее..." : "Скрыть"}
        </Button>
      )}
    </div>
  )
}

export default Collapse
