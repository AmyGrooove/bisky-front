import { IIconProps } from '@shared/types'

const ChevronRightIcon = (props: IIconProps) => {
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
        d="M16.5858 10.5858C17.3668 9.80474 18.6332 9.80474 19.4142 10.5858L31.4142 22.5858C32.1953 23.3668 32.1953 24.6332 31.4142 25.4142L19.4142 37.4142C18.6332 38.1953 17.3668 38.1953 16.5858 37.4142C15.8047 36.6332 15.8047 35.3668 16.5858 34.5858L27.1716 24L16.5858 13.4142C15.8047 12.6332 15.8047 11.3668 16.5858 10.5858Z"
      />
    </svg>
  )
}

export { ChevronRightIcon }
