"use client"

import { useState, useEffect } from "react"

import { AppImage } from "@/01-shared/ui/AppImage"
import { cl } from "@/01-shared/utils"
import { AnimeSeasonType } from "@/04-widgets/AnimeSeasonCard/models"

import styles from "./ImageSeason.module.scss"

const ImageSeason = ({ anime }: { anime: AnimeSeasonType }) => {
  const [image, setImage] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage((prevImage) =>
        prevImage === anime.screenshots!.length - 1 ? 0 : prevImage + 1,
      )
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      {anime.screenshots.length === 0 ? (
        <AppImage
          src={"error"}
          width={1000}
          height={500}
          imageType="screenshot"
          className={styles.seasonCard__image}
          containerClass={cl(
            styles.seasonCard__imageContainer,
            styles.seasonCard__imageContainer_current,
          )}
        />
      ) : (
        anime.screenshots!.map((el, index) => (
          <AppImage
            key={el}
            src={el}
            width={1000}
            height={500}
            imageType="screenshot"
            className={styles.seasonCard__image}
            containerClass={cl(
              styles.seasonCard__imageContainer,
              image === index && styles.seasonCard__imageContainer_current,
            )}
          />
        ))
      )}
    </>
  )
}

export { ImageSeason }
