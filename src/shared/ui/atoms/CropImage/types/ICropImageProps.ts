interface ICropImageProps {
  imgLink: string | null
  width: number
  height: number

  aspect?: number
  uploadFunction?: (file: FormData) => Promise<void>
  className?: string
  imageClassName?: string
  pointClassName?: string
}

export type { ICropImageProps }
