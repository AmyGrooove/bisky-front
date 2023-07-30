import Link from "next/link"

import { cl } from "@/utils"
import { AnimeSeasonCardComponent } from "@/types"

import AppImage from "../AppImage"
import Badge from "../Badge"

import styles from "./index.module.scss"
import AppImageSeason from "./AppImageSeasonMemo"

interface IAnimeSeasonCard {
  anime: AnimeSeasonCardComponent

  className?: string
}

const AnimeSeasonCard = ({ anime, className }: IAnimeSeasonCard) => {
  return (
    <Link href="" className={cl(styles.seasonCard, className)}>
      <AppImageSeason anime={anime} />

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

export default AnimeSeasonCard
