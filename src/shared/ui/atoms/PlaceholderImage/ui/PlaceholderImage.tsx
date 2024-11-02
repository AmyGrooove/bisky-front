"use client"

import { cn } from "@shared/utils/functions"
import { LogoIcon } from "@shared/icons"

import { IPlaceholderImageProps } from "../types/IPlaceholderImageProps"

import st from "./PlaceholderImage.module.scss"
import { usePlaceholderImage } from "./usePlaceholderImage"

const PlaceholderImage = (props: IPlaceholderImageProps) => {
  const {
    className,
    width,
    height,
    isClose,
    otherProps,
    isLoaded,
    MemoizedComponent,
  } = usePlaceholderImage(props)

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
