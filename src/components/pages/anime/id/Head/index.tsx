import { getOneAnimeInfo } from "@/services"
import { formatDate, getRandomValue, prettyRating } from "@/utils"
import AppImage from "@/components/common/AppImage"
import Title from "@/components/common/Title"
import {
  PlayerIcon,
  ClockIcon,
  CalendarIcon,
  InfoIcon,
} from "@/components/icons"
import Badge from "@/components/common/Badge"

import styles from "./index.module.scss"
import AnimePosterCard from "@/components/common/AnimePosterCard"

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
        <div className={styles.head__info}>
          <div>
            <div>
              <Title order={1}>{animeInfo?.labels[0]!}</Title>
              <Title order={2}>{animeInfo?.labels[1]!}</Title>
              <Badge color="gray">{prettyRating(animeInfo?.rating!)}</Badge>
            </div>
            <InfoIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default Head
