import { useEffect, useState } from "react"
import Link from "next/link"

import { Badge } from "@shared/ui/molecules/Badge"
import { Text } from "@shared/ui/atoms/Text"
import { StarIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { PlaceholderImage } from "@shared/ui/atoms/PlaceholderImage"

import { ISeasonProps } from "../types/ISeasonProps"

import st from "./Season.module.scss"

const Season = (props: ISeasonProps) => {
  const {
    title,
    poster,
    score,
    genres,
    screenshots,
    className,
    ...otherProps
  } = props

  const [isNextImageShow, setIsNextImageShow] = useState(false)
  const [backgroundImage1, setBackgroundImage1] = useState(0)
  const [backgroundImage2, setBackgroundImage2] = useState(1)

  useEffect(() => {
    const interval = setTimeout(() => {
      if (isNextImageShow)
        setBackgroundImage1((backgroundImage2 + 1) % screenshots.length)
      else setBackgroundImage2((backgroundImage1 + 1) % screenshots.length)

      setIsNextImageShow((prev) => !prev)
    }, 10000)

    return () => clearTimeout(interval)
  }, [backgroundImage1, backgroundImage2, screenshots.length, isNextImageShow])

  return (
    <Link {...otherProps} className={cn(st.root, className)}>
      <div className={st.mainContent}>
        <PlaceholderImage
          className={st.poster}
          imageClassName={st.image}
          src={poster ?? ""}
          width={182}
          height={252}
          alt=""
        />
        <Text size="32" weight="700">
          {title}
        </Text>
      </div>

      <Badge
        leftIcon={<StarIcon variant="filled" className={st.ratingIcon} />}
        isScoreStatus
        variant="big"
        className={st.score}
      >
        {score.toFixed(1)}
      </Badge>

      <Text className={st.genres} as="span" size="20" weight="700">
        {genres.join(" | ")}
      </Text>

      <PlaceholderImage
        className={cn(st.backgroundImage, {
          [st.backgroundImage_hide]: isNextImageShow,
        })}
        imageClassName={st.image}
        src={screenshots?.[backgroundImage1]}
        width={1000}
        height={380}
        alt=""
      />
      <PlaceholderImage
        className={cn(st.backgroundImage, {
          [st.backgroundImage_hide]: !isNextImageShow,
        })}
        imageClassName={st.image}
        src={screenshots?.[backgroundImage2]}
        width={1000}
        height={380}
        alt=""
      />
    </Link>
  )
}

export { Season }
