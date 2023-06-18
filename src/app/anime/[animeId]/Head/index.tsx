import { notFound } from "next/navigation"

import AppImage from "@/components/Common/AppImage"
import ScoreBadge from "@/components/Common/ScoreBadge"
import Title from "@/components/Common/Title"
import { CALENDAR, CLOCK, PLAYER } from "@/constants"
import { getOneAnimeInfo } from "@/services"
import { formatDate } from "@/utils"

import styles from "./index.module.scss"

interface IHead {
  animeId: number
}

const Head = async ({ animeId = 0 }: IHead) => {
  const animeInfo = await getOneAnimeInfo(animeId)

  if (!animeInfo) {
    return notFound()
  }

  return (
    <>
      <div className={styles.head}>
        <div className={styles.head__poster}>
          <AppImage
            className={styles.head__poster__anime}
            src={animeInfo.poster}
            width={241}
            height={336}
            imageType="poster"
          />
          <ScoreBadge
            className={styles.head__poster__score}
            score={animeInfo.anotherScores[0]}
          />
        </div>

        <div className={styles.head__right}>
          <div className={styles.head__upper}>
            <Title order={1}>{animeInfo.labels[0]}</Title>
            <span className={styles.head__upper__subtitle}>
              {animeInfo.labels[1]}
            </span>
            <div className={styles.head__upper__rating}>{animeInfo.rating}</div>
          </div>
          <div className={styles.head__summary}>
            <div className={styles.head__summary__item}>
              <AppImage
                imageType="vector"
                width={24}
                height={24}
                src={PLAYER}
              />
              <span>
                {animeInfo.episodes.count} эп. по ~{" "}
                {animeInfo.episodes.duration} мин.
              </span>
            </div>
            <div className={styles.head__summary__item}>
              <AppImage imageType="vector" width={24} height={24} src={CLOCK} />
              <span>Сериал,</span>
              <span>вышел</span>
            </div>
            <div className={styles.head__summary__item}>
              <AppImage
                imageType="vector"
                width={24}
                height={24}
                src={CALENDAR}
              />
              <span>{formatDate(animeInfo.dates.released_on)}</span>
            </div>
          </div>
        </div>
      </div>
      <AppImage
        containerClass={styles.head__backgroundContainer}
        className={styles.head__background}
        src={animeInfo.screenshots[0]}
        width={100}
        height={100}
        imageType="screenshot"
      />
    </>
  )
}

export default Head