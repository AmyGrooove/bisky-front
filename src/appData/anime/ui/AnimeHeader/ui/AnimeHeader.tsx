"use client"

import { useContext, useMemo } from "react"

import { PlaceholderImage } from "@shared/ui/atoms/PlaceholderImage"
import { Text } from "@shared/ui/atoms/Text"
import { Badge } from "@shared/ui/molecules/Badge"
import { Button } from "@shared/ui/molecules/Button"
import { InfoIcon, PlayerIcon, ClockIcon, CalendarIcon } from "@shared/icons"
import { cn, getRandomInt } from "@shared/utils/functions"
import {
  AnimeMiniInfo,
  getNormalKind,
  getNormalRating,
  getNormalStatus,
  getSeasonName,
} from "@entities/Anime"
import { ModalContext } from "@widgets/ModalProvider"

import { IAnimeHeaderProps } from "../types/IAnimeHeaderProps"

import st from "./AnimeHeader.module.scss"
import { UserData } from "./UserData/UserData"

const AnimeHeader = (props: IAnimeHeaderProps) => {
  const { animeData, className, ...otherProps } = props

  const { setModal } = useContext(ModalContext)

  const randomBackgroundSrc = useMemo(
    () =>
      animeData.screenshots?.[getRandomInt(animeData.screenshots.length - 1)] ??
      animeData.poster ??
      "",
    [animeData],
  )

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <div className={st.background}>
        <PlaceholderImage
          src={randomBackgroundSrc}
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
        imageClassName={st.posterImage}
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
          <Button
            onClick={() => setModal(<AnimeMiniInfo animeData={animeData} />)}
            className={st.button}
            leftIcon={<InfoIcon />}
          />
        </div>
        <div className={st.footer}>
          <div className={st.additionalInfo}>
            <div className={st.additionalRow}>
              <PlayerIcon className={st.icon} />
              <Text size="20">{`${animeData.episodes?.airedCount !== 0 ? `${animeData.episodes?.airedCount} эп. по ~ ` : ""}${animeData.episodes?.duration} мин`}</Text>
            </div>
            <div className={st.additionalRow}>
              <ClockIcon className={st.icon} />
              <Text size="20">{`${getNormalKind(animeData.kind ?? "none")},`}</Text>
              <Text
                size="20"
                weight="700"
                className={cn(st[`status_${animeData.status}`])}
                isDefaultColor={false}
              >
                {getNormalStatus(animeData.status ?? "anons")}
              </Text>
            </div>
            <div className={st.additionalRow}>
              <CalendarIcon className={st.icon} />
              <Text size="20">{getSeasonName(animeData.dates?.airedOn)}</Text>
            </div>
          </div>
          <UserData _id={animeData._id} />
        </div>
      </div>
    </div>
  )
}

export { AnimeHeader }
