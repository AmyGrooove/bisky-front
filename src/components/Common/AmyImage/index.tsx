import Image from "next/image"
import { useEffect, useState } from "react"

import { SHIKI_URL } from "@/supportingTool/constatns"
import { BLUR_LOGO } from "@/theme/sources"

import styles from "./index.module.scss"

interface IAmyImage {
  width: number
  height: number
  src: string | null
  imageType?: "poster" | "screenshot" | "search" | "vector"
  quality?: number
  alt?: string
  className?: string
}

const AmyImage = ({
  width,
  height,
  src,
  imageType = "vector",
  quality = 100,
  alt,
  className,
}: IAmyImage) => {
  const [loaded, setLoaded] = useState(false)
  const [disableBack, setDisableBack] = useState(imageType === "vector")

  useEffect(() => {
    if (loaded && imageType !== "vector") {
      setTimeout(() => {
        setDisableBack(true)
      }, 320)
    }
  }, [loaded, imageType])

  const getSrc = () => {
    switch (imageType) {
      case "poster":
      case "search":
        return SHIKI_URL + "system/animes/original/" + src + ".jpg"
      case "screenshot":
        return SHIKI_URL + "system/screenshots/original/" + src + ".jpg"
      default:
        return src
    }
  }

  return (
    <div className={styles.load}>
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
        src={getSrc() || BLUR_LOGO}
        width={width}
        height={height}
        alt={alt ? alt : ""}
        quality={quality}
        className={`${className} ${imageType !== "vector" && styles.load__img}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default AmyImage
