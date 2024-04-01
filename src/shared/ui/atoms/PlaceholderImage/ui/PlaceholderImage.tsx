"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"

import { cn } from "@shared/utils/functions"
import { LogoIcon } from "@shared/icons"

import { IPlaceholderImageProps } from "../types/IPlaceholderImageProps"

import st from "./PlaceholderImage.module.scss"

const PlaceholderImage = (props: IPlaceholderImageProps) => {
  const { className, imageClassName, isSkeleton = false, ...otherProps } = props

  const [isLoaded, setIsLoaded] = useState(false)
  const [isClose, setIsClose] = useState(false)

  const MemoizedComponent = useMemo(
    () =>
      otherProps.src !== "" ? (
        <Image
          {...otherProps}
          className={imageClassName}
          priority
          onError={() => setIsLoaded(false)}
          onLoad={() => setIsLoaded(true)}
          alt=""
        />
      ) : (
        <></>
      ),
    [otherProps.src],
  )

  useEffect(() => {
    setIsLoaded(false)
  }, [otherProps.src])

  useEffect(() => {
    if (isLoaded && otherProps.src !== "")
      setTimeout(() => setIsClose(true), 500)
  }, [isLoaded])

  return (
    <div
      className={cn(st.root, className, { [st.root_skeleton]: isSkeleton })}
      style={{
        width: `${otherProps.width}px`,
        height: `${otherProps.height}px`,
      }}
    >
      {!isSkeleton && (
        <>
          {!isClose && (
            <div
              {...otherProps}
              className={cn(st.blurImage, { [st.blurImage_hide]: isLoaded })}
            >
              <LogoIcon className={st.icon} />
            </div>
          )}
          {MemoizedComponent}
        </>
      )}
    </div>
  )
}

export { PlaceholderImage }
