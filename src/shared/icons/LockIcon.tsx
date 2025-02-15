import { IIconProps } from '@shared/types'

const LockIcon = (props: IIconProps) => {
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
        d="M24 6C21.8783 6 19.8434 6.84285 18.3431 8.34315C16.8429 9.84344 16 11.8783 16 14V20H32V14C32 11.8783 31.1571 9.84344 29.6569 8.34315C28.1566 6.84285 26.1217 6 24 6ZM36 20V14C36 10.8174 34.7357 7.76516 32.4853 5.51472C30.2348 3.26428 27.1826 2 24 2C20.8174 2 17.7652 3.26428 15.5147 5.51472C13.2643 7.76516 12 10.8174 12 14V20H10C6.68629 20 4 22.6863 4 26V40C4 43.3137 6.68629 46 10 46H38C41.3137 46 44 43.3137 44 40V26C44 22.6863 41.3137 20 38 20H36ZM10 24C8.89543 24 8 24.8954 8 26V40C8 41.1046 8.89543 42 10 42H38C39.1046 42 40 41.1046 40 40V26C40 24.8954 39.1046 24 38 24H10Z"
      />
    </svg>
  )
}

export { LockIcon }
