import { useState, useMemo, useEffect } from "react"
import Image from "next/image"

import { IPlaceholderImageProps } from "../types/IPlaceholderImageProps"

const usePlaceholderImage = (props: IPlaceholderImageProps) => {
  const { src, width, height, className, imageClassName, ...otherProps } = props

  const [isLoaded, setIsLoaded] = useState(false)
  const [isClose, setIsClose] = useState(false)

  const MemoizedComponent = useMemo(
    () =>
      src !== null && src !== "" ? (
        <Image
          {...otherProps}
          width={width}
          height={height}
          src={src}
          className={imageClassName}
          onError={() => setIsLoaded(false)}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          alt=""
        />
      ) : (
        <></>
      ),
    [src],
  )

  useEffect(() => {
    setIsLoaded(false)
    setIsClose(false)
  }, [src])

  useEffect(() => {
    if (isLoaded && src !== "" && src !== null)
      setTimeout(() => setIsClose(true), 500)
  }, [isLoaded])

  return {
    className,
    width,
    height,
    isClose,
    otherProps,
    isLoaded,
    MemoizedComponent,
  }
}

export { usePlaceholderImage }
