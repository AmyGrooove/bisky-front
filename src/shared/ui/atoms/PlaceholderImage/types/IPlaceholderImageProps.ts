import { ImageProps } from "next/image"

interface IPlaceholderImageProps extends Omit<ImageProps, "src"> {
  src: string | null
  imageClassName?: string
}

export type { IPlaceholderImageProps }
