"use client"

import { useState } from "react"

import { AnimeInfoType } from "@/types"
import Button from "@/components/common/Button"
import { MaskIcon, PaintIcon } from "@/components/icons"
import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IDescription extends Partial<AnimeInfoType> {}

const Description = ({
  description = "",
  genres = [],
  studios = [],
}: IDescription) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMore = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <>
      <div className={styles.genres}>
        <div className={styles.genres__item}>
          <MaskIcon size={24} />
          {genres?.map((item, index) => (
            <span key={index}>{item.name.ru}</span>
          ))}
        </div>
        <div className={styles.genres__item}>
          <PaintIcon size={24} />
          {studios?.map((item, index) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
      </div>

      {description && (
        <div className={styles.description}>
          <p
            className={cl(
              styles.description__text,
              isExpanded && styles.description__text_expanded,
            )}
          >
            {description}
          </p>
          <Button
            variant="subtle"
            onClick={handleMore}
            className={styles.description__more}
          >
            Подробнее...
          </Button>
        </div>
      )}
    </>
  )
}

export default Description
