import { IIconProps } from '@shared/types'

const MoveLeftIcon = (props: IIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="move-left"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.70711 7.29289C7.09763 7.68342 7.09763 8.31658 6.70711 8.70711L4.41421 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H4.41421L6.70711 15.2929C7.09763 15.6834 7.09763 16.3166 6.70711 16.7071C6.31658 17.0976 5.68342 17.0976 5.29289 16.7071L1.29289 12.7071C0.902369 12.3166 0.902369 11.6834 1.29289 11.2929L5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289Z"
    />
  </svg>
)

export { MoveLeftIcon }
