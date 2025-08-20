interface ILinkProps {
  label: string
  href: string

  isOpenInNewPage?: boolean
}

interface ILabelProps {
  children: string

  variant?: 'big' | 'small'
  link?: ILinkProps
  className?: string
}

export type { ILabelProps }
