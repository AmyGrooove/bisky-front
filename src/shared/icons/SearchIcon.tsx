import { IIconProps } from '@shared/types'

const SearchIcon = (props: IIconProps) => {
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
        d="M22 8C14.268 8 8 14.268 8 22C8 29.732 14.268 36 22 36C29.732 36 36 29.732 36 22C36 14.268 29.732 8 22 8ZM4 22C4 12.0589 12.0589 4 22 4C31.9411 4 40 12.0589 40 22C40 26.25 38.5271 30.156 36.0638 33.2354L43.4142 40.5858C44.1953 41.3668 44.1953 42.6332 43.4142 43.4142C42.6332 44.1953 41.3668 44.1953 40.5858 43.4142L33.2354 36.0638C30.156 38.5271 26.25 40 22 40C12.0589 40 4 31.9411 4 22Z"
      />
    </svg>
  )
}

export { SearchIcon }
