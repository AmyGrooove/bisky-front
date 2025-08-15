interface IUploadFieldProps {
  onChange: (value: string | null) => void

  variant?: 'big' | 'small' | 'mini'
  accept?: string
  className?: string
}

export type { IUploadFieldProps }
