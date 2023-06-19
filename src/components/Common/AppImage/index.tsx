"use client"

import Image, { ImageProps } from "next/image"
import { useEffect, useState } from "react"

import { cl, getImageSrc } from "@/utils"
import BlurLogoIcon from "@/Icons/components/BlurLogoIcon"

import styles from "./index.module.scss"

interface IAppImage extends Partial<ImageProps> {
  src: string
  width: number
  height: number

  alt?: string
  imageType?: "poster" | "screenshot" | "another"
  className?: string
  containerClass?: string
}

const AppImage = ({
  src,
  width,
  height,
  alt = "",
  imageType = "another",
  className,
  containerClass,
  ...props
}: IAppImage) => {
  const [loaded, setLoaded] = useState(false)
  const [errorGet, setErrorGet] = useState(false)
  const [disableBack, setDisableBack] = useState(false)

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setDisableBack(true)
      }, 320)
    }
  }, [loaded, imageType])

  return (
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
          <BlurLogoIcon />
        </span>
      )}
      <Image
        src={
          imageType === "another" ? src : getImageSrc(src, imageType, errorGet)
        }
        width={width}
        height={height}
        priority
        onError={() => setErrorGet(true)}
        className={cl(styles.AppImage__img, className)}
        onLoad={() => setLoaded(true)}
        alt={alt}
        {...props}
      />
    </div>
  )
}

export default AppImage
