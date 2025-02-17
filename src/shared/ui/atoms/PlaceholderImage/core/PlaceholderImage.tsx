'use client'

import Image from 'next/image'
import { forwardRef } from 'react'

import { cn } from '@shared/utils/functions'
import { LogoIcon } from '@shared/icons'

import { IPlaceholderImageProps } from '../types/IPlaceholderImageProps'

import { usePlaceholderImage } from './usePlaceholderImage'
import st from './PlaceholderImage.module.scss'

const PlaceholderImage = forwardRef<HTMLDivElement, IPlaceholderImageProps>(
  (props, ref) => {
    const {
      className,
      width,
      height,
      isPlaceholderHidden,
      isLoaded,
      src,
      alt,
      handleLoad,
      handleError,
      containerStyle,
    } = usePlaceholderImage(props)

    return (
      <div ref={ref} className={cn(st.root, className)} style={containerStyle}>
        {!isPlaceholderHidden && (
          <div className={cn(st.blurImage, { [st.blurImage_hide]: isLoaded })}>
            <LogoIcon className={st.icon} />
          </div>
        )}
        {src ? (
          <Image
            className={st.image}
            width={width}
            height={height}
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
          />
        ) : null}
      </div>
    )
  },
)

PlaceholderImage.displayName = 'PlaceholderImage'

export { PlaceholderImage }
