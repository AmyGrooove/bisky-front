"use client"

import { useMemo, useState } from "react"

import IconButton from "@/components/Common/IconButton"
import { STAR_FULL, STAR_OUTLINE } from "@/constants"

import styles from "./index.module.scss"

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
        return STAR_FULL
      } else {
        return STAR_OUTLINE
      }
    } else {
      if (hoveredStars >= index) {
        return STAR_FULL
      } else if (!hoveredStars && defaultValue >= index) {
        return STAR_FULL
      }
      return STAR_OUTLINE
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
            iconName={getStar(index)}
            size={28}
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

export default Rating
