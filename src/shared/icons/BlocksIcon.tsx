import { IIconProps } from '@shared/types'

const BlocksIcon = (props: IIconProps) => {
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
        d="M26 8C26 5.79086 27.7909 4 30 4H40C42.2091 4 44 5.79086 44 8V18C44 20.2091 42.2091 22 40 22H30C27.7909 22 26 20.2091 26 18V8ZM40 8H30V18H40V8ZM5.17157 13.1716C5.92172 12.4214 6.93913 12 8 12H18C19.0609 12 20.0783 12.4214 20.8284 13.1716C21.5786 13.9217 22 14.9391 22 16V26H32C33.0609 26 34.0783 26.4214 34.8284 27.1716C35.5786 27.9217 36 28.9391 36 30V40C36 41.0609 35.5786 42.0783 34.8284 42.8284C34.0783 43.5786 33.0609 44 32 44H8C6.93914 44 5.92172 43.5786 5.17157 42.8284C4.42143 42.0783 4 41.0609 4 40V16C4 14.9391 4.42143 13.9217 5.17157 13.1716ZM8 30V40H18V30H8ZM18 26H8V16H18V26ZM22 30V40H32V30H22Z"
      />
    </svg>
  )
}

export { BlocksIcon }
