import Image from "next/image"
import { useEffect, useState } from "react"

import { cl, getImageSrc } from "@/utils"

import styles from "./index.module.scss"
import GetSvg from "./GetSvg"

interface IAmyImage {
  src: string | null
  width: number
  height: number
  imageType?: "poster" | "screenshot" | "search" | "vector"
  quality?: number
  alt?: string
  className?: string
  containerClass?: string
}

const AmyImage = ({
  src,
  width,
  height,
  imageType = "vector",
  quality = 100,
  alt = "",
  className,
  containerClass,
}: IAmyImage) => {
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
          className={cl(styles.amyImage, className)}
          src={src || undefined}
        />
      ) : (
        <div className={cl(styles.amyImage, containerClass)}>
          {!disableBack && (
            <span
              style={{ height: height }}
              className={cl(
                styles.amyImage__blur,
                loaded && styles.amyImage__blur_disable,
              )}
            >
              <GetSvg
                width={height / 2}
                height={height / 2}
                className={styles.amyImage__blur__img}
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
            className={cl(styles.amyImage__img, className)}
            onLoad={() => setLoaded(true)}
          />
        </div>
      )}
    </>
  )
}

export default AmyImage
