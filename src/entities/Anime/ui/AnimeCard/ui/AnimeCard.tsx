import Link from "next/link"

import { cn } from "@shared/utils/functions"
import { Text } from "@shared/ui/atoms/Text"
import { Badge } from "@shared/ui/molecules/Badge"
import { EyeIcon, StarIcon } from "@shared/icons"
import { WatchStatus } from "@shared/ui/atoms/WatchStatus"
import { PlaceholderImage } from "@shared/ui/atoms/PlaceholderImage"

import { IAnimeCardProps } from "../types/IAnimeCardProps"

import st from "./AnimeCard.module.scss"

const AnimeCard = (props: IAnimeCardProps) => {
  const { anime, userData, className, ...otherProps } = props

  return (
    <Link {...otherProps} className={cn(st.root, className)}>
      <PlaceholderImage
        className={st.poster}
        imageClassName={st.posterImage}
        src={anime.poster ?? ""}
        width={182}
        height={252}
        alt=""
      />

      <Text weight="700" className={st.title}>
        {anime.label}
      </Text>

      <div className={st.badges}>
        {anime.status === "anons" ? (
          <>
            <Badge
              leftIcon={<EyeIcon />}
              className={cn(st.badge, st.badge_inListCount)}
            >
              {String(anime.inListCount)}
            </Badge>
            <Badge className={cn(st.badge, st.badge_anons)}>анонс</Badge>
          </>
        ) : (
          <Badge
            leftIcon={<StarIcon variant="filled" />}
            isScoreStatus
            className={st.badge}
          >
            {anime.score.toFixed(1)}
          </Badge>
        )}
        {anime.status === "ongoing" && (
          <Badge className={cn(st.badge, st.badge_ongoing)}>
            {String(anime.airedSeriesCount) + " серия"}
          </Badge>
        )}
      </div>

      {userData.userLogged && (
        <div className={st.userData}>
          <WatchStatus
            onClick={userData.onClick}
            disabled={
              userData.userLogged &&
              userData.status !== "added" &&
              !!userData.status
            }
            status={userData.status ?? "setWatch"}
          />
          {userData.score && (
            <Badge
              leftIcon={<StarIcon variant="filled" />}
              isScoreStatus
              className={st.userScore}
            >
              {userData.score.toFixed(0)}
            </Badge>
          )}
        </div>
      )}
    </Link>
  )
}

export { AnimeCard }
