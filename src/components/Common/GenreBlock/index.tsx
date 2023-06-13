"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

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
      <div className={styles.genreCard__title}>{title}</div>
      <p className={styles.genreCard__content}>{children}</p>
      <div className={styles.genreCard__image}>
        <AppImage src={imgSrc} width={300} height={200} imageType="poster" />
      </div>
    </div>
  )
}

export default GenreCard
