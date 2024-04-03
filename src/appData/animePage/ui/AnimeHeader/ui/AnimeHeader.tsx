import { PlaceholderImage } from "@shared/ui/atoms/PlaceholderImage"
import { Text } from "@shared/ui/atoms/Text"
import { Badge } from "@shared/ui/molecules/Badge"
import { Button } from "@shared/ui/molecules/Button"
import { InfoIcon, PlayerIcon, ClockIcon, CalendarIcon } from "@shared/icons"
import { cn, getRandomInt } from "@shared/utils/functions"
import {
  getNormalKind,
  getNormalRating,
  getNormalStatus,
} from "@entities/Anime"

import { IAnimeHeaderProps } from "../types/IAnimeHeaderProps"

import st from "./AnimeHeader.module.scss"

const AnimeHeader = (props: IAnimeHeaderProps) => {
  const { animeData, className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <div className={st.background}>
        <PlaceholderImage
          src={
            animeData.screenshots?.[
              getRandomInt(animeData.screenshots.length - 1)
            ] ?? ""
          }
          width={1440}
          height={400}
          alt=""
          className={st.backgroundImage}
          imageClassName={st.backgroundImage}
        />
      </div>
      <PlaceholderImage
        width={200}
        height={320}
        src={animeData.poster ?? ""}
        alt=""
        className={st.poster}
      />
      <div className={st.infoWrapper}>
        <div className={st.titleWrapper}>
          <div className={st.titleInfo}>
            <Text size="32" weight="700">
              {animeData.labels?.ru ?? ""}
            </Text>
            <Text size="20">{animeData.labels?.en ?? ""}</Text>
            <Badge isDefaultTextColor={false} className={st.rating}>
              {getNormalRating(animeData.rating ?? "none")}
            </Badge>
          </div>
          <Button className={st.button} leftIcon={<InfoIcon />} />
        </div>
        <div className={st.additionalInfo}>
          <div className={st.additionalRow}>
            <PlayerIcon className={st.icon} />
            <Text size="20">{`${animeData.episodes?.airedCount} эп. по ~ ${animeData.episodes?.averageDuration} мин.`}</Text>
          </div>
          <div className={st.additionalRow}>
            <ClockIcon className={st.icon} />
            <Text size="20">{`${getNormalKind(animeData.kind ?? "none")},`}</Text>
            <Text
              size="20"
              weight="700"
              className={cn(st[`status_${animeData.status}`])}
            >
              {getNormalStatus(animeData.status ?? "anons")}
            </Text>
          </div>
          <div className={st.additionalRow}>
            <CalendarIcon className={st.icon} />
            <Text size="20">{animeData.dates?.airedOn ?? ""}</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AnimeHeader }
