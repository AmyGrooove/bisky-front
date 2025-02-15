import { IIconProps } from '@shared/types'

const PauseIcon = (props: IIconProps) => {
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
        d="M10 10C10 7.79086 11.7909 6 14 6H18C20.2091 6 22 7.79086 22 10V38C22 40.2091 20.2091 42 18 42H14C11.7909 42 10 40.2091 10 38V10ZM18 10H14V38H18V10ZM26 10C26 7.79086 27.7909 6 30 6H34C36.2091 6 38 7.79086 38 10V38C38 40.2091 36.2091 42 34 42H30C27.7909 42 26 40.2091 26 38V10ZM34 10H30V38H34V10Z"
      />
    </svg>
  )
}

export { PauseIcon }
