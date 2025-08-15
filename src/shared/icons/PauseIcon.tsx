import { memo } from 'react'
import { IIconProps } from '@shared/types'

const PauseIcon = memo((props: IIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="pause"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5C5 3.89543 5.89543 3 7 3H9C10.1046 3 11 3.89543 11 5V19C11 20.1046 10.1046 21 9 21H7C5.89543 21 5 20.1046 5 19V5ZM9 5H7V19H9V5ZM13 5C13 3.89543 13.8954 3 15 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H15C13.8954 21 13 20.1046 13 19V5ZM17 5H15V19H17V5Z"
    />
  </svg>
))

export { PauseIcon }
