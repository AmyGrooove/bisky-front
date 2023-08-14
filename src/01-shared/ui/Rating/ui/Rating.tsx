"use client"

import { useMemo, useState } from "react"

import { StarFullIcon, StarOutlineIcon } from "../../icons"
import { IconButton } from "../../IconButton"

import styles from "./Rating.module.scss"

interface IRating {
  defaultValue: number

  count?: number
  withLabels?: boolean
  readOnly?: boolean
  onSelectedClick?: (index: number) => void
}

const Rating = ({
  defaultValue,
  count = 10,
  withLabels = false,
  readOnly = false,
  onSelectedClick,
}: IRating) => {
  const [hoveredStars, setHoveredStars] = useState(0)

  const getStar = (index: number) => {
    if (readOnly) {
      if (defaultValue >= index) {
        return <StarFullIcon size={28} />
      } else {
        return <StarOutlineIcon size={28} />
      }
    } else {
      if (hoveredStars >= index) {
        return <StarFullIcon size={28} />
      } else if (!hoveredStars && defaultValue >= index) {
        return <StarFullIcon size={28} />
      }
      return <StarOutlineIcon size={28} />
    }
  }

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
  }, [count, defaultValue, hoveredStars])

  return <div className={styles.rating}>{starRating}</div>
}

export { Rating }
