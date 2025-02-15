import { IIconProps } from '@shared/types'

const CalendarIcon = (props: IIconProps) => {
  const { isCustomColor = false, ...otherProps } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill={!isCustomColor ? 'var(--light-100)' : 'currentColor'}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2C17.1046 2 18 2.89543 18 4V6H30V4C30 2.89543 30.8954 2 32 2C33.1046 2 34 2.89543 34 4V6H38C41.3137 6 44 8.68629 44 12V40C44 43.3137 41.3137 46 38 46H10C6.68629 46 4 43.3137 4 40V12C4 8.68629 6.68629 6 10 6H14V4C14 2.89543 14.8954 2 16 2ZM14 10H10C8.89543 10 8 10.8954 8 12V18H40V12C40 10.8954 39.1046 10 38 10H34V12C34 13.1046 33.1046 14 32 14C30.8954 14 30 13.1046 30 12V10H18V12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12V10ZM40 22H8V40C8 41.1046 8.89543 42 10 42H38C39.1046 42 40 41.1046 40 40V22Z"
      />
    </svg>
  )
}

export { CalendarIcon }
