import { IIconProps } from '@shared/types'

const YandexIcon = (props: Omit<IIconProps, 'isDefaultFill'>) => {
  const { ...otherProps } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...otherProps}>
      <path
        d="M48 24C48 10.7446 37.2554 0 24 0C10.7446 0 0 10.7446 0 24C0 37.2554 10.7446 48 24 48C37.2554 48 48 37.2554 48 24Z"
        fill="#F8604A"
      />
      <path
        d="M32.4 38.4406H27.5594V13.44H25.1206C20.9594 13.44 18.8806 15.5206 18.8806 18.6406C18.8806 22.1206 20.28 23.8394 23.4 25.92L25.8406 27.6406L18.9194 38.4H13.3606L19.9606 28.68C16.1594 25.92 14.0806 23.4794 14.0806 18.96C14.0806 13.3994 17.88 9.60001 25.2 9.60001H32.4V38.4406Z"
        fill="white"
      />
    </svg>
  )
}

export { YandexIcon }
