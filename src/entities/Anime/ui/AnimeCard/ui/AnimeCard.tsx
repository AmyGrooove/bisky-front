import Link from "next/link"

import { cn } from "@shared/utils/functions"
import { EyeIcon, StarIcon } from "@shared/icons"
import { PlaceholderImage, Text } from "@shared/ui/atoms"
import { Badge } from "@shared/ui/molecules"

import { IAnimeCardProps } from "../types/IAnimeCardProps"

import st from "./AnimeCard.module.scss"
import { useAnimeCard } from "./useAnimeCard"
import { CardUserStatus } from "./CardUserStatus/CardUserStatus"

const AnimeCard = (props: IAnimeCardProps) => {
  const { anime, className, otherProps, session } = useAnimeCard(props)

  return (
    <Link
      {...otherProps}
      href={`/anime/${anime._id}`}
      className={cn(st.root, className)}
    >
      <PlaceholderImage
        className={st.poster}
        imageClassName={st.posterImage}
        src={anime.poster ?? null}
        width={160}
        height={256}
        alt=""
      />
      <Text className={st.title}>
        {anime?.labels?.ru ?? anime?.labels?.en ?? ""}
      </Text>
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
            {anime.score?.averageScore.toFixed(1)}
          </Badge>
        )}
        {anime.status === "ongoing" && (
          <Badge className={cn(st.badge, st.badge_ongoing)}>
            {String(anime.episodes?.airedCount) + " серия"}
          </Badge>
        )}
      </div>
      {session && (
        <div className={st.userData}>
          <CardUserStatus
            _id={anime._id}
            userStatus={anime.userData?.animeStatus}
            className={cn({
              [st.transparentStatus]: !anime.userData?.animeStatus,
            })}
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
      {anime?.relatedName && (
        <Text className={st.relatedName}>{anime?.relatedName}</Text>
      )}
    </Link>
  )
}

export { AnimeCard }
