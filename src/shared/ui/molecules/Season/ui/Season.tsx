import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { Badge } from "@shared/ui/molecules/Badge/ui/Badge"
import { Text } from "@shared/ui/atoms/Text/ui/Text"
import { StarIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions/cn"

import { ISeasonProps } from "../types/ISeasonProps"

import st from "./Season.module.scss"

const Season = (props: ISeasonProps) => {
  const { title, poster, rating, genres, backgroundImages } = props
  const [backgroundImage1, setBackgroundImage1] = useState(backgroundImages[0])
  const [backgroundImage2, setBackgroundImage2] = useState(backgroundImages[1])
  const backgroundRef1 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let indexImage1 = 0
    let indexImage2 = 1
    const changeBackground = setInterval(() => {
      console.log(backgroundRef1.current)
      backgroundRef1.current?.classList.toggle("image_wrapper_hidden")
      if (backgroundRef1.current?.classList.contains("image_wrapper_hidden")) {
        setBackgroundImage1(
          backgroundImages[(indexImage2 + 1) % backgroundImages.length],
        )
      }
    }, 10000)
    return () => clearInterval(changeBackground)
  }, [backgroundImages])

  return (
    <div className={st.season}>
      <Badge
        className={st.rating}
        iconLeft={<StarIcon fillStar={true} width="15px" height="15px" />}
        text={rating ? Number(rating).toFixed(1) : "0.0"}
      />

      <div className={st.season_content}>
        <Image className={st.poster} src={poster} width={0} height={0} alt="" />
        <Text className={st.title} as="p" size="32" weight="700">
          {title}
        </Text>
      </div>

      <Text className={st.genres} as="span" size="20" weight="700">
        {genres.join(" | ")}
      </Text>

      <div ref={backgroundRef1} className={st.image_wrapper}>
        <Image
          className={st.background_image1}
          src={backgroundImage1}
          alt=""
          fill
        />
      </div>

      <Image
        className={st.background_image2}
        src={backgroundImage2}
        alt=""
        fill
      />
    </div>
  )
}

export { Season }
