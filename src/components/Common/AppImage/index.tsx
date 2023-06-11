"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import { cl, getImageSrc } from "@/utils"

import styles from "./index.module.scss"
import GetSvg from "./GetSvg"

interface IAppImage {
  src: string | null
  width: number
  height: number
  imageType?: "poster" | "screenshot" | "search" | "vector"
  quality?: number
  alt?: string
  className?: string
  containerClass?: string
}

const AppImage = ({
  src,
  width,
  height,
  imageType = "vector",
  quality = 100,
  alt = "",
  className,
  containerClass,
}: IAppImage) => {
  const [loaded, setLoaded] = useState(false)
  const [errorGet, setErrorGet] = useState(false)
  const [disableBack, setDisableBack] = useState(imageType === "vector")

  useEffect(() => {
    if (loaded && imageType !== "vector") {
      setTimeout(() => {
        setDisableBack(true)
      }, 320)
    }
  }, [loaded, imageType])

  return (
    <>
      {imageType === "vector" || src === null ? (
        <GetSvg
          width={width}
          height={height}
          className={cl(styles.AppImage, className)}
          src={src || undefined}
        />
      ) : (
        <div className={cl(styles.AppImage, containerClass)}>
          {!disableBack && (
            <span
              style={{ height: height }}
              className={cl(
                styles.AppImage__blur,
                loaded && styles.AppImage__blur_disable,
                className,
              )}
            >
              <GetSvg
                width={height / 2}
                height={height / 2}
                className={styles.AppImage__blur__img}
              />
            </span>
          )}
          <Image
            src={getImageSrc(src, imageType, errorGet)}
            width={width}
            height={height}
            alt={alt ? alt : ""}
            quality={quality}
            priority
            onError={() => setErrorGet(true)}
            className={cl(styles.AppImage__img, className)}
            onLoad={() => setLoaded(true)}
          />
        </div>
      )}
    </>
  )
}

export default AppImage
