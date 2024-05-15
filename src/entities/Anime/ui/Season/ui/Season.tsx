"use client"

import Link from "next/link"

import { StarIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { PlaceholderImage, Text } from "@shared/ui/atoms"
import { Badge } from "@shared/ui/molecules"

import { ISeasonProps } from "../types/ISeasonProps"

import st from "./Season.module.scss"
import { useSeason } from "./useSeason"

const Season = (props: ISeasonProps) => {
  const { isDisabled = false, anime, className, ...otherProps } = props

  const { isNextImageShow, backgroundImage1, backgroundImage2 } =
    useSeason(props)

  return (
    <Link
      {...otherProps}
      href={`/anime/${anime._id}`}
      className={cn(st.root, className, { [st.root_disabled]: isDisabled })}
    >
      <div className={st.mainContent}>
        <PlaceholderImage
          className={st.poster}
          imageClassName={st.image}
          src={anime.poster ?? null}
          width={182}
          height={252}
          alt=""
        />
        <Text size="32" weight="700">
          {anime.labels?.ru ?? anime.labels?.en ?? ""}
        </Text>
      </div>
      <Badge
        leftIcon={<StarIcon variant="filled" className={st.ratingIcon} />}
        isScoreStatus
        variant="big"
        className={st.score}
      >
        {anime.score?.averageScore.toFixed(1)}
      </Badge>
      <Text className={st.genres} as="span" size="20" weight="700">
        {anime.genres?.map((item) => item.name.ru).join(" | ")}
      </Text>
      <span className={st.background} />
      <PlaceholderImage
        className={cn(st.backgroundImage, {
          [st.backgroundImage_hide]: isNextImageShow,
        })}
        imageClassName={st.image}
        src={
          (anime.screenshots?.length === 0
            ? anime.poster
            : anime.screenshots?.[backgroundImage1]) ?? null
        }
        width={1080}
        height={380}
        alt=""
      />
      <PlaceholderImage
        className={cn(st.backgroundImage, {
          [st.backgroundImage_hide]: !isNextImageShow,
        })}
        imageClassName={st.image}
        src={anime.screenshots?.[backgroundImage2] ?? null}
        width={1080}
        height={380}
        alt=""
      />
    </Link>
  )
}

export { Season }
