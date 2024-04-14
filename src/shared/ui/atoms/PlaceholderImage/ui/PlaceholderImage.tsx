"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"

import { cn } from "@shared/utils/functions"
import { LogoIcon } from "@shared/icons"

import { IPlaceholderImageProps } from "../types/IPlaceholderImageProps"

import st from "./PlaceholderImage.module.scss"

const PlaceholderImage = (props: IPlaceholderImageProps) => {
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
          priority
          onError={() => setIsLoaded(false)}
          onLoad={() => setIsLoaded(true)}
          alt=""
        />
      ) : (
        <></>
      ),
    [src],
  )

  useEffect(() => {
    setIsLoaded(false)
  }, [src])

  useEffect(() => {
    if (isLoaded && src !== "" && src !== null)
      setTimeout(() => setIsClose(true), 500)
  }, [isLoaded])

  return (
    <div
      className={cn(st.root, className)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {!isClose && (
        <div
          {...otherProps}
          className={cn(st.blurImage, { [st.blurImage_hide]: isLoaded })}
        >
          <LogoIcon className={st.icon} />
        </div>
      )}
      {MemoizedComponent}
    </div>
  )
}

export { PlaceholderImage }
