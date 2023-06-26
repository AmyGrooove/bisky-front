"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { cl } from "@/utils"
import { AnimeSeasonCardComponent } from "@/types"

import AppImage from "../AppImage"
import Badge from "../Badge"

import styles from "./index.module.scss"

interface IAnimeSeasonCard {
  anime: AnimeSeasonCardComponent

  className?: string
}

const AnimeSeasonCard = ({ anime, className }: IAnimeSeasonCard) => {
  const [image, setImage] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage((prevImage) =>
        prevImage === anime.screenshots!.length - 1 ? 0 : prevImage + 1,
      )
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <Link href="" className={cl(styles.seasonCard, className)}>
      {anime.screenshots!.map((el, index) => (
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

      <Badge calculate className={styles.seasonCard__score}>
        {anime.anotherScores![0].toString()}
      </Badge>

      <div className={styles.seasonCard__main}>
        <AppImage
          src={anime.poster!.toString()}
          width={220}
          height={310}
          imageType="poster"
          className={styles.seasonCard__main__image}
        />
        <div className={styles.seasonCard__main__label}>{anime.labels}</div>
      </div>

      <div className={styles.seasonCard__genre}>
        {anime.genres!.map((el) => (
          <div key={el.name.en} className={styles.seasonCard__genre__text}>
            {el.name.ru}
          </div>
        ))}
      </div>
    </Link>
  )
}

export default AnimeSeasonCard
