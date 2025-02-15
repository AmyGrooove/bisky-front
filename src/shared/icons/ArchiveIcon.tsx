import { IIconProps } from '@shared/types'

const ArchiveIcon = (props: IIconProps) => {
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
        d="M2 8C2 5.79086 3.79086 4 6 4H42C44.2091 4 46 5.79086 46 8V14C46 16.2091 44.2091 18 42 18V38C42 39.5913 41.3679 41.1174 40.2426 42.2426C39.1174 43.3679 37.5913 44 36 44H12C10.4087 44 8.88258 43.3679 7.75736 42.2426C6.63214 41.1174 6 39.5913 6 38V18C3.79086 18 2 16.2091 2 14V8ZM10 18V38C10 38.5304 10.2107 39.0391 10.5858 39.4142C10.9609 39.7893 11.4696 40 12 40H36C36.5304 40 37.0391 39.7893 37.4142 39.4142C37.7893 39.0391 38 38.5304 38 38V18H10ZM6 14V8H42V14H6ZM18 24C18 22.8954 18.8954 22 20 22H28C29.1046 22 30 22.8954 30 24C30 25.1046 29.1046 26 28 26H20C18.8954 26 18 25.1046 18 24Z"
      />
    </svg>
  )
}

export { ArchiveIcon }
