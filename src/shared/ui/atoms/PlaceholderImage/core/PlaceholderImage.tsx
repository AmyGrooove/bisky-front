import Image from 'next/image'

import { cn } from '@shared/utils/functions'
import { LogoIcon } from '@shared/icons'

import { IPlaceholderImageProps } from '../types/IPlaceholderImageProps'

import { usePlaceholderImage } from './usePlaceholderImage'
import st from './PlaceholderImage.module.scss'

const PlaceholderImage = (props: IPlaceholderImageProps) => {
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
    <div className={cn(st.root, className)} style={containerStyle}>
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
}

export { PlaceholderImage }
