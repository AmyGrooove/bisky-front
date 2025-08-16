import { IIconProps } from '@shared/types'

const MinusIcon = (props: IIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="minus"
    {...props}
  >
    <path d="M19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H19Z" />
  </svg>
)

export { MinusIcon }
