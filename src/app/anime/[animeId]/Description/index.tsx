"use client"

import { useState } from "react"

import AppImage from "@/components/Common/AppImage"
import Button from "@/components/Common/Button"
import { MASK, PAINT } from "@/constants"
import { IAnimeInfo } from "@/types"
import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IDescription extends Partial<IAnimeInfo> {}

const Description = ({ description = "" }: IDescription) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMore = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <>
      <div className={styles.genres}>
        <div className={styles.genres__item}>
          <AppImage imageType="vector" width={24} height={24} src={MASK} />
          <span>боевик, боевик, боевик, боевик</span>
        </div>
        <div className={styles.genres__item}>
          <AppImage imageType="vector" width={24} height={24} src={PAINT} />
          <span>David Production</span>
        </div>
      </div>

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
    </>
  )
}

export default Description
