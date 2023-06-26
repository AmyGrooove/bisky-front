"use client"

import Image, { ImageProps } from "next/image"
import { useEffect, useMemo, useState } from "react"

import { cl, getImageSrc } from "@/utils"

import BlurLogoIcon from "../../icons/components/BlurLogoIcon"

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
  const MemoizedComponent = useMemo(
    () => (
      <Image
        src={imageType === "another" ? src : getImageSrc(src, imageType)}
        width={width}
        height={height}
        priority
        onError={() => setLoaded(false)}
        className={cl(styles.AppImage__img, className)}
        onLoad={() => setLoaded(true)}
        alt={alt}
        {...props}
      />
    ),
    [],
  )

  const [loaded, setLoaded] = useState(false)
  const [close, setClose] = useState(false)

  useEffect(() => {
    if (loaded) setTimeout(() => setClose(true), 500)
  }, [loaded])

  return (
    <div className={cl(styles.AppImage, containerClass)}>
      {!close && (
        <span
          style={{ height, width }}
          className={cl(
            styles.AppImage__blur,
            loaded && styles.AppImage__blur_disable,
            className,
          )}
        >
          <BlurLogoIcon size={height / 1.5} />
        </span>
      )}
      {MemoizedComponent}
    </div>
  )
}

export default AppImage
