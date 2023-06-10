import { ReactNode } from "react"

import styles from "./index.module.scss"
import { IAnimePoster, ICAnimePoster } from "@/types"
import { cl } from "@/utils"
import Image from "next/image"
import AmyImage from "../AmyImage"
import Link from "next/link"
import { STAR_FULL, STAR_OUTLINE } from "@/constants"
import StatusBagde from "../StatusBadge"
import ScoreBadge from "../ScoreBadge"
import Badge from "../Badge"
import WatchStatusButton from "../WatchStatusButton"

interface IAnimePosterCard {
  rating?: string
  status?: "released" | "ongoing" | "anons"
  badge:
    | "anons"
    | "ongoing"
    | "released"
    | "new_episode"
    | "watching"
    | "watching_plus_one"
  isAdded: boolean
  anime: ICAnimePoster
  className?: string
}

const AnimePosterCard = ({
  badge,
  isAdded,
  anime,
  className,
}: IAnimePosterCard) => {
  return (
    <Link href="/" className={cl(styles.poster__wrapper, className)}>
      <div className={cl(styles.poster)}>
        <div className={cl(styles.poster__image)}>
          <AmyImage
            className={cl(styles.poster__image)}
            imageType="poster"
            src={anime.poster!}
            width={180}
            height={290}
            alt={anime.labels[0]}
          />

          {isAdded && (
            <WatchStatusButton
              status="setWatch"
              className={cl(styles.poster__watchStatus)}
            />
          )}

          {anime.status === "anons" && (
            <>
              <StatusBagde
                status="anons"
                className={cl(styles.poster__status_anons)}
              />
            </>
          )}

          {anime.status === "ongoing" && (
            <>
              <StatusBagde
                status="ongoing"
                className={cl(styles.poster__status_ongoing)}
              />
              <ScoreBadge
                score={anime.scores[0]}
                className={cl(styles.poster__score)}
              />
            </>
          )}

          {anime.status === "released" && (
            <ScoreBadge
              score={anime.scores[0]}
              className={cl(styles.poster__score)}
            />
          )}

          {anime.status === "new_episode" && (
            <>
              <Badge color="blue" className={cl(styles.poster__newEpisode)}>
                2 серия
              </Badge>
              <ScoreBadge
                score={anime.scores[0]}
                className={cl(styles.poster__score)}
              />
            </>
          )}

          {anime.status === "watching" && (
            <>
              <Badge color="blue" className={cl(styles.poster__counterEpisode)}>
                3/6
              </Badge>
              <ScoreBadge
                score={anime.scores[0]}
                className={cl(styles.poster__score)}
              />
            </>
          )}

          {anime.status === "watching_plus_one" && (
            <>
              <Badge color="red" className={cl(styles.poster__plusOne)}>
                +1
              </Badge>
              <Badge color="blue" className={cl(styles.poster__counterEpisode)}>
                3/6
              </Badge>
              <ScoreBadge
                score={anime.scores[0]}
                className={cl(styles.poster__score)}
              />
            </>
          )}

          {anime.status === "anons" && (
            <StatusBagde
              status="anons"
              className={cl(styles.poster__status_anons)}
            />
          )}

          {anime.status === "ongoing" && (
            <>
              <StatusBagde
                status="ongoing"
                className={cl(styles.poster__status_ongoing)}
              />
              <ScoreBadge
                score={anime.scores[0]}
                className={cl(styles.poster__score)}
              />
            </>
          )}

          {anime.status === "released" && (
            <ScoreBadge
              score={anime.scores[0]}
              className={cl(styles.poster__score)}
            />
          )}

          {anime.status === "new_episode" && (
            <>
              <Badge color="blue" className={cl(styles.poster__newEpisode)}>
                2 серия
              </Badge>
              <ScoreBadge
                score={anime.scores[0]}
                className={cl(styles.poster__score)}
              />
            </>
          )}
        </div>

        <div className={cl(styles.poster__label)}>
          <h3 className={cl(styles.poster__label__text)}>{anime.labels[0]}</h3>
        </div>
      </div>
    </Link>
  )
}

export default AnimePosterCard
