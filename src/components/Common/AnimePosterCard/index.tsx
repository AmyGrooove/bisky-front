import Link from "next/link"

import { IAnimeInfo } from "@/types"
import { cl } from "@/utils"

import AppImage from "../AppImage"
import ScoreBadge from "../ScoreBadge"
import StatusBagde from "../StatusBadge"
import WatchStatusButton from "../WatchStatusButton"

import styles from "./index.module.scss"

interface IAnimePosterCard {
  anime: Partial<IAnimeInfo>

  posterType?: "normal" | "newSeries" | "watching"
  watchedCount?: number
  statusWatch?: "added" | "complete" | "watching" | "dropped"
  className?: string
}

const account = true

const AnimePosterCard = ({
  anime,
  posterType = "normal",
  watchedCount,
  statusWatch,
  className,
}: IAnimePosterCard) => {
  return (
    <Link
      href={`/anime/${anime.id}`}
      className={cl(styles.animePosterCard, className)}
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

        {anime.status !== "anons" && (
          <ScoreBadge
            score={anime.scores!}
            className={styles.animePosterCard__score}
          />
        )}

        {posterType === "newSeries" && (
          <StatusBagde
            status="ongoing"
            className={styles.animePosterCard__leftStatus}
          >
            {anime.episodes?.aired} серия
          </StatusBagde>
        )}

        {posterType === "watching" &&
          anime.status === "ongoing" &&
          watchedCount !== 0 &&
          anime.episodes?.aired &&
          watchedCount &&
          anime.episodes.aired > watchedCount && (
            <StatusBagde
              status="red"
              className={styles.animePosterCard__leftStatus}
            >
              +{anime.episodes.aired - watchedCount}
            </StatusBagde>
          )}

        {posterType !== "newSeries" && (
          <StatusBagde
            status={anime.status!}
            className={styles.animePosterCard__rightStatus}
          >
            {posterType === "watching"
              ? watchedCount + "/" + anime.episodes?.aired
              : anime.status}
          </StatusBagde>
        )}

        {account && (
          <WatchStatusButton
            onClick={() => {}}
            status={statusWatch}
            className={cl(
              styles.animePosterCard__button,
              statusWatch === undefined &&
                styles.animePosterCard__button_setWatch,
            )}
          />
        )}

        <div className={styles.animePosterCard__label}>
          <div className={styles.animePosterCard__label__text}>
            {anime.labels}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AnimePosterCard
