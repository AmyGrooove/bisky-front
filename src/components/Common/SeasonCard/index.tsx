"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { cl } from "@/utils"
import { ISeason } from "@/types"

import AppImage from "../AppImage"
import ScoreBadge from "../ScoreBadge"

import styles from "./index.module.scss"

interface ISeasonCard {
  anime: ISeason

  className?: string
}

const SeasonCard = ({ anime, className }: ISeasonCard) => {
  const [image, setImage] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage((prevImage) =>
        prevImage === anime.screenShots.length - 1 ? 0 : prevImage + 1,
      )
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <Link href="" className={cl(styles.seasonCard, className)}>
      {anime.screenShots.map((el, index) => (
        <AppImage
          key={el}
          src={el}
          width={1000}
          height={500}
          imageType="screenshot"
          className={styles.seasonCard__image}
          containerClass={cl(
            styles.seasonCard__imageContainer,
            image === index && styles.seasonCard__imageContainer_current,
          )}
        />
      ))}
      <ScoreBadge score={anime.scores} className={styles.seasonCard__score} />
      <div className={styles.seasonCard__main}>
        <AppImage
          src={anime.shiki_id.toString()}
          width={220}
          height={310}
          imageType="poster"
          className={styles.seasonCard__main__image}
        />
        <div className={styles.seasonCard__main__label}>{anime.labels}</div>
      </div>
      <div className={styles.seasonCard__genre}>
        {anime.genres.map((el) => (
          <div key={el} className={styles.seasonCard__genre__text}>
            {el}
          </div>
        ))}
      </div>
    </Link>
  )
}

export default SeasonCard
