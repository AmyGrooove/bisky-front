import Link from "next/link"

import { AnimePosterCardComponent } from "@/types"
import { cl } from "@/utils"

import AppImage from "../AppImage"
import Badge from "../Badge"
import WatchStatusButton from "../WatchStatusButton"

import styles from "./index.module.scss"

interface IAnimePosterCard {
  anime: AnimePosterCardComponent

  posterType?: "normal" | "newSeries" | "watching"
  watchedCount?: number
  statusWatch?: "added" | "complete" | "watching" | "dropped"
  hover?: boolean
  badges?: boolean
  title?: boolean
  className?: string
}

const AnimePosterCard = ({
  anime,
  posterType = "normal",
  watchedCount,
  statusWatch,
  className,
  hover = true,
  badges = true,
  title = true,
}: IAnimePosterCard) => {
  const SELECT_COLOR = (status: "anons" | "ongoing" | "released") =>
    status === "anons" ? "orange" : status === "ongoing" ? "blue" : "green"

  return (
    <Link
      href={`/anime/${anime.id}`}
      className={cl(
        styles.animePosterCard,
        hover && styles.animePosterCard__hover,
        className,
      )}
    >
      <div>
        <AppImage
          src={anime.id?.toString()!}
          width={200}
          height={320}
          imageType="poster"
          className={styles.animePosterCard__image}
          containerClass={styles.animePosterCard__image}
        />

        {anime.status !== "anons" && badges && (
          <Badge calculate className={styles.animePosterCard__score}>
            {anime.anotherScores![0].toString()}
          </Badge>
        )}

        {posterType === "newSeries" && badges && (
          <Badge color="blue" className={styles.animePosterCard__leftStatus}>
            {anime.episodes?.aired + " серия"}
          </Badge>
        )}

        {posterType === "watching" &&
          badges &&
          anime.status === "ongoing" &&
          anime.episodes?.aired! > watchedCount! && (
            <Badge color="red" className={styles.animePosterCard__leftStatus}>
              {"+" + (anime.episodes?.aired! - watchedCount!)}
            </Badge>
          )}

        {posterType !== "newSeries" && badges && (
          <Badge
            color={SELECT_COLOR(anime.status!)}
            className={styles.animePosterCard__rightStatus}
          >
            {posterType === "watching"
              ? watchedCount + "/" + anime.episodes?.aired
              : anime.status!}
          </Badge>
        )}

        {/* изменить когда будет авторизация */}
        {true && badges && (
          <WatchStatusButton
            status={statusWatch}
            className={cl(
              styles.animePosterCard__button,
              statusWatch === undefined &&
                styles.animePosterCard__button_setWatch,
            )}
          />
        )}

        {title && (
          <div className={styles.animePosterCard__label}>
            <div className={styles.animePosterCard__label__text}>
              {anime.labels}
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

export default AnimePosterCard
