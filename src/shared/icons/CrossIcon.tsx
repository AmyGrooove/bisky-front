import { IIconProps } from '@shared/types'

const CrossIcon = (props: IIconProps) => {
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
        d="M10.5858 10.5858C11.3668 9.80474 12.6332 9.80474 13.4142 10.5858L24 21.1716L34.5858 10.5858C35.3668 9.80474 36.6332 9.80474 37.4142 10.5858C38.1953 11.3668 38.1953 12.6332 37.4142 13.4142L26.8284 24L37.4142 34.5858C38.1953 35.3668 38.1953 36.6332 37.4142 37.4142C36.6332 38.1953 35.3668 38.1953 34.5858 37.4142L24 26.8284L13.4142 37.4142C12.6332 38.1953 11.3668 38.1953 10.5858 37.4142C9.80474 36.6332 9.80474 35.3668 10.5858 34.5858L21.1716 24L10.5858 13.4142C9.80474 12.6332 9.80474 11.3668 10.5858 10.5858Z"
      />
    </svg>
  )
}

export { CrossIcon }
