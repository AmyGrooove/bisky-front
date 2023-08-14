import Link from "next/link"

import { cl } from "@/01-shared/utils"
import { Badge } from "@/01-shared/ui/Badge"
import { AppImage } from "@/01-shared/ui/AppImage"

import { AnimeSeasonType } from "../models"

import { ImageSeason } from "./ImageSeason"
import styles from "./AnimeSeasonCard.module.scss"

interface IAnimeSeasonCard {
  anime: AnimeSeasonType

  className?: string
}

const AnimeSeasonCard = ({ anime, className }: IAnimeSeasonCard) => {
  return (
    <Link href="" className={cl(styles.seasonCard, className)}>
      <ImageSeason anime={anime} />

      <Badge calculate className={styles.seasonCard__score}>
        {String(anime.anotherScores![0])}
      </Badge>

      <div className={styles.seasonCard__main}>
        <AppImage
          src={String(anime.poster)}
          width={220}
          height={310}
          imageType="poster"
          className={styles.seasonCard__main__image}
        />
        <div className={styles.seasonCard__main__label}>{anime.labels[0]}</div>
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

export { AnimeSeasonCard }
