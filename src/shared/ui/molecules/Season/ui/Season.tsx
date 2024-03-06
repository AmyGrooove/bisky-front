import Image from "next/image"
import { useEffect, useState } from "react"

import { Badge } from "@shared/ui/molecules/Badge"
import { Text } from "@shared/ui/atoms/Text"
import { StarIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"

import { ISeasonProps } from "../types/ISeasonProps"

import st from "./Season.module.scss"

const Season = (props: ISeasonProps) => {
  const { title, poster, rating, genres, backgroundImages } = props

  const [isNextImageShow, setIsNextImageShow] = useState(false)
  const [backgroundImage1, setBackgroundImage1] = useState(0)
  const [backgroundImage2, setBackgroundImage2] = useState(1)

  const isBackgroundImageEmpty = backgroundImages.length === 0

  useEffect(() => {
    const interval = setTimeout(() => {
      if (isNextImageShow) {
        setBackgroundImage1((backgroundImage2 + 1) % backgroundImages.length)
      } else {
        setBackgroundImage2((backgroundImage1 + 1) % backgroundImages.length)
      }

      setIsNextImageShow((prev) => !prev)
    }, 10000)

    return () => clearTimeout(interval)
  }, [
    backgroundImage1,
    backgroundImage2,
    backgroundImages.length,
    isNextImageShow,
  ])

  return (
    <div className={st.season}>
      <div className={st.season_content}>
        <Badge
          className={st.rating}
          iconLeft={<StarIcon fillStar={true} width="15px" height="15px" />}
          text={rating ? Number(rating).toFixed(1) : "0.0"}
        />
        <Image className={st.poster} src={poster} width={0} height={0} alt="" />
        <Text className={st.title} as="p" size="32" weight="700">
          {title}
        </Text>
      </div>

      <Text className={st.genres} as="span" size="20" weight="700">
        {genres.join(" | ")}
      </Text>

      {isBackgroundImageEmpty && <div className={st.stub} />}

      {!isBackgroundImageEmpty && (
        <>
          <Image
            className={cn(
              st.backgroundImage,
              isNextImageShow && st.backgroundImage_hide,
            )}
            src={backgroundImages[backgroundImage1]}
            priority={true}
            alt=""
            fill
          />

          {backgroundImages.length > 1 && (
            <Image
              className={cn(
                st.backgroundImage,
                !isNextImageShow && st.backgroundImage_hide,
              )}
              src={backgroundImages[backgroundImage2]}
              priority={true}
              alt=""
              fill
            />
          )}
        </>
      )}
    </div>
  )
}

export { Season }
