import { IIconProps } from '@shared/types'

const ClockIcon = (props: IIconProps) => {
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
        d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24 10C25.1046 10 26 10.8954 26 12V22.7639L32.8944 26.2111C33.8824 26.7051 34.2828 27.9065 33.7889 28.8944C33.2949 29.8824 32.0935 30.2828 31.1056 29.7889L23.1056 25.7889C22.428 25.4501 22 24.7575 22 24V12C22 10.8954 22.8954 10 24 10Z"
      />
    </svg>
  )
}

export { ClockIcon }
