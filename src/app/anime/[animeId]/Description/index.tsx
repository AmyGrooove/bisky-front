"use client"

import { useState } from "react"

import AppImage from "@/components/Common/AppImage"
import Button from "@/components/Common/Button"
import { IAnimeInfo } from "@/types"
import { cl } from "@/utils"
import { MaskIcon, PaintIcon } from "@/Icons"

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
          <MaskIcon size={24} />
          <span>боевик, боевик, боевик, боевик</span>
        </div>
        <div className={styles.genres__item}>
          <PaintIcon size={24} />
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
