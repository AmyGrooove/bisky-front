'use client'

import Image from 'next/image'
import { forwardRef, memo } from 'react'
import { cn } from '@shared/utils/functions'
import { LogoIcon } from '@shared/icons'

import { IPlaceholderImageProps } from '../types/IPlaceholderImageProps'

import { usePlaceholderImage } from './usePlaceholderImage'
import st from './PlaceholderImage.module.scss'

const PlaceholderImage = memo(
  forwardRef<HTMLDivElement, IPlaceholderImageProps>((props, ref) => {
    const {
      className,
      isPlaceholderHidden,
      isLoaded,
      src,
      alt,
      handleLoad,
      handleError,
      handleTransitionEnd,
      sizesAttr,
      onClick,
      objectFit,
      style,
    } = usePlaceholderImage(props)

    return (
      <div
        ref={ref}
        style={style}
        onClick={onClick}
        className={cn(st.root, className)}
      >
        {!isPlaceholderHidden && (
          <div
            className={cn(st.blurImage, { [st.blurImage_hide]: isLoaded })}
            onTransitionEnd={handleTransitionEnd}
          >
            <LogoIcon className={st.icon} />
          </div>
        )}
        {src ? (
          <Image
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            fill
            sizes={sizesAttr}
            style={{ objectFit }}
          />
        ) : null}
      </div>
    )
  }),
)

PlaceholderImage.displayName = 'PlaceholderImage'

export { PlaceholderImage }
