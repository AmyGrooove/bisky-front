import { ImageProps } from "next/image"

interface IPlaceholderImageProps extends ImageProps {
  imageClassName?: string
  isSkeleton?: boolean
}

export type { IPlaceholderImageProps }
