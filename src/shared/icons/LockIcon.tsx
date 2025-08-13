import { memo } from 'react'
import { IIconProps } from '@shared/types'

const LockIcon = memo((props: IIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="lock"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V10H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3ZM18 10V7C18 5.4087 17.3679 3.88258 16.2426 2.75736C15.1174 1.63214 13.5913 1 12 1C10.4087 1 8.88258 1.63214 7.75736 2.75736C6.63214 3.88258 6 5.4087 6 7V10H5C3.34315 10 2 11.3431 2 13V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V13C22 11.3431 20.6569 10 19 10H18ZM5 12C4.44772 12 4 12.4477 4 13V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V13C20 12.4477 19.5523 12 19 12H5Z"
    />
  </svg>
))

export { LockIcon }
