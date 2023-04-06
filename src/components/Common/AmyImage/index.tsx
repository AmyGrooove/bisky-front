import Image from "next/image"
import { CSSProperties, useEffect, useState } from "react"

import { BLUR_LOGO } from "@/theme/sources"
import { getSrc } from "@/supportingTool/functions"

import styles from "./index.module.scss"

interface IAmyImage {
  width: number
  height: number
  src: string | null
  imageType?: "poster" | "screenshot" | "search" | "vector"
  quality?: number
  alt?: string
  className?: string
  containerClass?: string
  style?: CSSProperties
}

const AmyImage = ({
  width,
  height,
  src,
  imageType = "vector",
  quality = 100,
  alt,
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
    <div className={`${styles.load} ${containerClass}`}>
      {!disableBack && (
        <span
          style={{ height: height }}
          className={`${styles.load__blur} ${
            loaded && styles.load__blur_disable
          } ${
            imageType !== "vector" && imageType === "search"
              ? styles.load__blur_border_search
              : styles.load__blur_border
          }`}
        >
          <Image
            src={BLUR_LOGO}
            width={height / 2}
            height={height / 2}
            alt={alt ? alt : ""}
            quality={30}
            className={styles.load__blur_img}
          />
        </span>
      )}
      <Image
        src={getSrc(src || BLUR_LOGO, imageType, errorGet)}
        width={width}
        height={height}
        alt={alt ? alt : ""}
        quality={quality}
        priority
        onError={() => setErrorGet(true)}
        className={`${className} ${imageType !== "vector" && styles.load__img}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default AmyImage
