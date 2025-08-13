import { memo } from 'react'
import { IIconProps } from '@shared/types'

const MoveRightIcon = memo((props: IIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="move-right"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.2929 7.29289C17.6834 6.90237 18.3166 6.90237 18.7071 7.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L18.7071 16.7071C18.3166 17.0976 17.6834 17.0976 17.2929 16.7071C16.9024 16.3166 16.9024 15.6834 17.2929 15.2929L19.5858 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H19.5858L17.2929 8.70711C16.9024 8.31658 16.9024 7.68342 17.2929 7.29289Z"
    />
  </svg>
))

export { MoveRightIcon }
