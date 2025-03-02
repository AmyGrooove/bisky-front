interface ISelectElementProps {
  side: 'left' | 'right'
  poster: string | null
  label: string
  _id: string
  selectThis: () => void
}

export type { ISelectElementProps }
