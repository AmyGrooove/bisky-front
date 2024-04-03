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
  const {
    anime,
    isUserLogged = false,
    onClick,
    className,
    ...otherProps
  } = props

  return (
    <Link
      {...otherProps}
      href={`anime/${anime._id ?? ""}`}
      className={cn(st.root, className)}
    >
      <PlaceholderImage
        className={st.poster}
        imageClassName={st.posterImage}
        src={anime.poster ?? ""}
        width={160}
        height={256}
        alt=""
      />

      <Text className={st.title}>{anime.labels?.ru ?? ""}</Text>

      <div className={st.badges}>
        {anime.status === "anons" ? (
          <>
            <Badge
              leftIcon={<EyeIcon />}
              className={cn(st.badge, st.badge_inListCount)}
            >
              {String(anime.usersList?.addedCount)}
            </Badge>
            <Badge className={cn(st.badge, st.badge_anons)}>анонс</Badge>
          </>
        ) : (
          <Badge
            leftIcon={<StarIcon variant="filled" />}
            isScoreStatus
            className={st.badge}
          >
            {anime.score?.averageScore?.toFixed(1)}
          </Badge>
        )}
        {anime.status === "ongoing" && (
          <Badge className={cn(st.badge, st.badge_ongoing)}>
            {String(anime.episodes?.airedCount) + " серия"}
          </Badge>
        )}
      </div>

      {isUserLogged && (
        <div className={st.userData}>
          <WatchStatus
            onClick={onClick}
            disabled={
              isUserLogged &&
              anime.userData?.animeStatus !== "added" &&
              !!anime.userData?.animeStatus
            }
            status={anime.userData?.animeStatus ?? "setWatch"}
          />
          {anime.userData?.score && (
            <Badge
              leftIcon={<StarIcon variant="filled" />}
              isScoreStatus
              className={st.userScore}
            >
              {anime.userData?.score.toFixed(0)}
            </Badge>
          )}
        </div>
      )}
    </Link>
  )
}

export { AnimeCard }
