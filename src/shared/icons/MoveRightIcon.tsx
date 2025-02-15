import { IIconProps } from '@shared/types'

const MoveRightIcon = (props: IIconProps) => {
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
        d="M34.5858 14.5858C35.3668 13.8047 36.6332 13.8047 37.4142 14.5858L45.4142 22.5858C46.1953 23.3668 46.1953 24.6332 45.4142 25.4142L37.4142 33.4142C36.6332 34.1953 35.3668 34.1953 34.5858 33.4142C33.8047 32.6332 33.8047 31.3668 34.5858 30.5858L39.1716 26H4C2.89543 26 2 25.1046 2 24C2 22.8954 2.89543 22 4 22H39.1716L34.5858 17.4142C33.8047 16.6332 33.8047 15.3668 34.5858 14.5858Z"
      />
    </svg>
  )
}

export { MoveRightIcon }
