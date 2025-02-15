import { IIconProps } from '@shared/types'

const PlayIcon = (props: IIconProps) => {
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
        d="M11.0416 4.24458C11.6838 3.894 12.4661 3.92202 13.0815 4.31764L41.0815 22.3176C41.654 22.6856 42 23.3195 42 24C42 24.6805 41.654 25.3144 41.0815 25.6824L13.0815 43.6824C12.4661 44.078 11.6838 44.106 11.0416 43.7554C10.3995 43.4048 10 42.7316 10 42V6C10 5.26839 10.3995 4.59516 11.0416 4.24458ZM14 9.66333V38.3367L36.3015 24L14 9.66333Z"
      />
    </svg>
  )
}

export { PlayIcon }
