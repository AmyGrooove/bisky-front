import { memo } from 'react'
import { IIconProps } from '@shared/types'

const CalendarIcon = memo((props: IIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="calendar"
    {...props}
  >
    <path d="M20 11H4V20C4 20.5523 4.44771 21 5 21H19C19.5523 21 20 20.5523 20 20V11ZM15 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44771 19.5523 5 19 5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6ZM22 20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H7V2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3H19C20.6569 3 22 4.34315 22 6V20Z" />
  </svg>
))

export { CalendarIcon }
