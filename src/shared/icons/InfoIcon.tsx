import { IIconProps } from '@shared/types'

const InfoIcon = (props: IIconProps) => {
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
        d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM22 16C22 14.8954 22.8954 14 24 14H24.02C25.1246 14 26.02 14.8954 26.02 16C26.02 17.1046 25.1246 18 24.02 18H24C22.8954 18 22 17.1046 22 16ZM24 22C25.1046 22 26 22.8954 26 24V32C26 33.1046 25.1046 34 24 34C22.8954 34 22 33.1046 22 32V24C22 22.8954 22.8954 22 24 22Z"
      />
    </svg>
  )
}

export { InfoIcon }
