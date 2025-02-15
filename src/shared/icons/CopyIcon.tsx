import { IIconProps } from '@shared/types'

const CopyIcon = (props: IIconProps) => {
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
        d="M8 6C6.90457 6 6 6.90457 6 8V28C6 29.0954 6.90457 30 8 30C9.10457 30 10 30.8954 10 32C10 33.1046 9.10457 34 8 34C4.69543 34 2 31.3046 2 28V8C2 4.69543 4.69543 2 8 2H28C31.3046 2 34 4.69543 34 8C34 9.10457 33.1046 10 32 10C30.8954 10 30 9.10457 30 8C30 6.90457 29.0954 6 28 6H8ZM20 18C18.8954 18 18 18.8954 18 20V40C18 41.1046 18.8954 42 20 42H40C41.1046 42 42 41.1046 42 40V20C42 18.8954 41.1046 18 40 18H20ZM14 20C14 16.6863 16.6863 14 20 14H40C43.3137 14 46 16.6863 46 20V40C46 43.3137 43.3137 46 40 46H20C16.6863 46 14 43.3137 14 40V20Z"
      />
    </svg>
  )
}

export { CopyIcon }
