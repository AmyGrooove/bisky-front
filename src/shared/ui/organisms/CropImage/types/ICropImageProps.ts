interface ICropImageProps {
  value: string
  uploadFunction: (value: FormData) => Promise<void>
  closeFunction: () => void

  pointClassName?: string
  aspect?: number
}

export type { ICropImageProps }
