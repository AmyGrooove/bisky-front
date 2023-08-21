"use client"

import { useCallback, useMemo, useState } from "react"

import { StarFullIcon, StarOutlineIcon } from "../../icons"
import { IconButton } from "../../IconButton"

import styles from "./Rating.module.scss"

interface IRating {
  defaultValue: number

  count?: number
  sizeIcons?: number
  withLabels?: boolean
  readOnly?: boolean
  onSelectedClick?: (index: number) => void
}

const Rating = ({
  defaultValue,
  count = 10,
  sizeIcons = 22,
  withLabels = false,
  readOnly = false,
  onSelectedClick,
}: IRating) => {
  const [hoveredStars, setHoveredStars] = useState(0)

  const getStar = useCallback(
    (index: number) => {
      if (readOnly) {
        if (defaultValue >= index) {
          return <StarFullIcon size={sizeIcons} />
        } else {
          return <StarOutlineIcon size={sizeIcons} />
        }
      } else {
        if (hoveredStars >= index) {
          return <StarFullIcon size={sizeIcons} />
        } else if (!hoveredStars && defaultValue >= index) {
          return <StarFullIcon size={sizeIcons} />
        }
        return <StarOutlineIcon size={sizeIcons} />
      }
    },
    [defaultValue, hoveredStars, readOnly, sizeIcons],
  )

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((index) => (
        <div key={index} className={styles.rating__item}>
          <IconButton
            onClick={onSelectedClick && (() => onSelectedClick(index))}
            onMouseEnter={() => setHoveredStars(index)}
            onMouseLeave={() => setHoveredStars(0)}
            icon={getStar(index)}
            className={styles.rating__item__star}
          />
          {withLabels && (
            <span className={styles.rating__item__label}>{index}</span>
          )}
        </div>
      ))
  }, [count, getStar, onSelectedClick, withLabels])

  return <div className={styles.rating}>{starRating}</div>
}

export { Rating }
