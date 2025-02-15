import { IIconProps } from '@shared/types'

const ChevronLeftIcon = (props: IIconProps) => {
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
        d="M31.4142 10.5858C32.1953 11.3668 32.1953 12.6332 31.4142 13.4142L20.8284 24L31.4142 34.5858C32.1953 35.3668 32.1953 36.6332 31.4142 37.4142C30.6332 38.1953 29.3668 38.1953 28.5858 37.4142L16.5858 25.4142C15.8047 24.6332 15.8047 23.3668 16.5858 22.5858L28.5858 10.5858C29.3668 9.80474 30.6332 9.80474 31.4142 10.5858Z"
      />
    </svg>
  )
}

export { ChevronLeftIcon }
