import {
  formatDates,
  formatEpisodes,
  getOneAnimeInfo,
  prettyRating,
  prettyStatus,
} from "@/02-entities/anime"
import { getRandomValue } from "@/01-shared/utils"
import { AppImage } from "@/01-shared/ui/AppImage"
import { AnimePosterCard } from "@/04-widgets/AnimePosterCard"
import { Title } from "@/01-shared/ui/Title"
import { Badge } from "@/01-shared/ui/Badge"
import {
  CalendarIcon,
  ClockIcon,
  InfoIcon,
  PlayerIcon,
} from "@/01-shared/ui/icons"
import { IconButton } from "@/01-shared/ui/IconButton"

import styles from "./Head.module.scss"

interface IHead {
  animeId: number
}

const Head = async ({ animeId = 0 }: IHead) => {
  const animeInfo = await getOneAnimeInfo(animeId)

  return (
    <>
      <AppImage
        src={
          animeInfo?.screenshots[getRandomValue(animeInfo?.screenshots.length)]!
        }
        width={1280}
        height={500}
        imageType="screenshot"
        containerClass={styles.background}
        className={styles.background__image}
      />
      <div className={styles.head}>
        <AnimePosterCard
          anime={{
            id: animeInfo?.id!,
            labels: animeInfo?.labels!,
            scores: animeInfo?.scores!,
            anotherScores: animeInfo?.anotherScores!,
            status: animeInfo?.status!,
            episodes: animeInfo?.episodes!,
          }}
          badges={false}
          hover={false}
          title={false}
        />
        <div className={styles.head__anime}>
          <div>
            <Title order={1}>{animeInfo?.labels[0] ?? ""}</Title>
            <Title order={2}>{animeInfo?.labels[1] ?? ""}</Title>
            <Badge color="gray" className={styles.head__anime__rating}>
              {prettyRating(animeInfo?.rating)}
            </Badge>
            <div className={styles.head__anime__info}>
              <PlayerIcon className={styles.head__anime__info__icon} />
              <span className={styles.head__anime__info__text}>
                {formatEpisodes(animeInfo?.episodes)}
              </span>
              <ClockIcon className={styles.head__anime__info__icon} />
              <span className={styles.head__anime__info__text}>
                Статус: {prettyStatus(animeInfo?.status)}
              </span>
              <CalendarIcon className={styles.head__anime__info__icon} />
              <span className={styles.head__anime__info__text}>
                {formatDates(animeInfo?.dates)}
              </span>
            </div>
          </div>
          <IconButton icon={<InfoIcon />} />
        </div>
      </div>
    </>
  )
}

export { Head }
