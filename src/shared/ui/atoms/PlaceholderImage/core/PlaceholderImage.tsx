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
      isPlaceholderHidden,
      isLoaded,
      src,
      alt,
      handleLoad,
      handleError,
    } = usePlaceholderImage(props)

    return (
      <div ref={ref} className={cn(st.root, className)}>
        {!isPlaceholderHidden && (
          <div className={cn(st.blurImage, { [st.blurImage_hide]: isLoaded })}>
            <LogoIcon className={st.icon} />
          </div>
        )}
        {src ? (
          <Image
            className={st.image}
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            fill
          />
        ) : null}
      </div>
    )
  },
)

PlaceholderImage.displayName = 'PlaceholderImage'

export { PlaceholderImage }
