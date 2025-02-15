import { IIconProps } from '@shared/types'

const MoveLeftIcon = (props: IIconProps) => {
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
        d="M13.4142 14.5858C14.1953 15.3668 14.1953 16.6332 13.4142 17.4142L8.82843 22H44C45.1046 22 46 22.8954 46 24C46 25.1046 45.1046 26 44 26H8.82843L13.4142 30.5858C14.1953 31.3668 14.1953 32.6332 13.4142 33.4142C12.6332 34.1953 11.3668 34.1953 10.5858 33.4142L2.58579 25.4142C1.80474 24.6332 1.80474 23.3668 2.58579 22.5858L10.5858 14.5858C11.3668 13.8047 12.6332 13.8047 13.4142 14.5858Z"
      />
    </svg>
  )
}

export { MoveLeftIcon }
