import { IIconProps } from '@shared/types'

const CheckIcon = (props: IIconProps) => {
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
        d="M41.4142 10.5858C42.1953 11.3668 42.1953 12.6332 41.4142 13.4142L19.4142 35.4142C18.6332 36.1953 17.3668 36.1953 16.5858 35.4142L6.58579 25.4142C5.80474 24.6332 5.80474 23.3668 6.58579 22.5858C7.36683 21.8047 8.63317 21.8047 9.41421 22.5858L18 31.1716L38.5858 10.5858C39.3668 9.80474 40.6332 9.80474 41.4142 10.5858Z"
      />
    </svg>
  )
}

export { CheckIcon }
