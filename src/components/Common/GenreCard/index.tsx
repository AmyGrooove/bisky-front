import { ReactNode } from "react"

import { cl } from "@/utils"

import AppImage from "../AppImage"

import styles from "./index.module.scss"

interface IGenreCard {
  title: string
  imgSrc: string
  children: ReactNode

  className?: string
}

const GenreCard = ({ title, imgSrc, children, className }: IGenreCard) => {
  return (
    <div className={cl(styles.genreCard, className)}>
      <div className={styles.genreCard__content}>
        <div className={styles.genreCard__title}>{title}</div>
        <div>{children}</div>
      </div>
      <AppImage
        containerClass={styles.genreCard__imageContainer}
        className={styles.genreCard__image}
        src={imgSrc}
        width={300}
        height={160}
        imageType="screenshot"
      />
    </div>
  )
}

export default GenreCard
