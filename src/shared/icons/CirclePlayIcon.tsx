import { IIconProps } from '@shared/types'

const CirclePlayIcon = (props: IIconProps) => {
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
        d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM19.0563 14.2367C19.7066 13.8886 20.4957 13.9268 21.1094 14.3359L33.1094 22.3359C33.6658 22.7068 34 23.3313 34 24C34 24.6687 33.6658 25.2932 33.1094 25.6641L21.1094 33.6641C20.4957 34.0732 19.7066 34.1114 19.0563 33.7633C18.406 33.4153 18 32.7376 18 32V16C18 15.2624 18.406 14.5847 19.0563 14.2367ZM22 19.737V28.263L28.3944 24L22 19.737Z"
      />
    </svg>
  )
}

export { CirclePlayIcon }
