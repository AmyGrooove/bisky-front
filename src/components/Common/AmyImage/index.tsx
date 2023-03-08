import Image from 'next/image'
import { useState } from 'react'

import { BLUR_AVATAR } from '@/theme/sources'

import styles from './index.module.scss'

interface IAmyImage {
  width: number;
  height: number;
  src?: string;
  quality?: number;
  backSrc?: string;
  alt?: string;
  className?: string;
  border?: boolean;
}

const AmyImage = ({
  width,
  height,
  src,
  quality,
  backSrc,
  alt,
  className,
  border,
}: IAmyImage) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {backSrc && !loaded && (
        <Image
          src={backSrc}
          width={width}
          height={height}
          alt={alt ? alt : ''}
          quality={30}
          className={`${styles.load} ${
            border ? styles.load_border : className
          }`}
        />
      )}
      <Image
        src={src ? src : BLUR_AVATAR}
        width={width}
        height={height}
        alt={alt ? alt : ''}
        quality={quality}
        className={className}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}

export default AmyImage
