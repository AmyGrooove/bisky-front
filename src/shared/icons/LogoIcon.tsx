import { IIconProps } from "./types/IIconProps"

const LogoIcon = (props: IIconProps) => {
  const { isDefaultFill, ...otherProps } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...otherProps}>
      <path
        d="M24.86 29.3804C34.94 29.3804 43.34 34.0667 43.34 39.6902C43.34 45.3137 34.94 50 24.86 50C14.78 50 6.38 45.3137 6.38 39.6902C6.38 34.0667 14.78 29.3804 24.86 29.3804Z"
        fill={isDefaultFill ?? true ? "#DD5480" : undefined}
      />
      <path
        d="M41.0999 1.36683C43.7599 2.10883 43.7599 10.2317 41.0999 19.1356C38.4399 28.0396 33.96 34.9128 31.3 34.1708C28.64 33.4288 28.64 25.3059 31.3 16.402C33.96 7.49805 38.4399 0.624837 41.0999 1.36683Z"
        fill={isDefaultFill ?? true ? "#DD5480" : undefined}
      />
      <path
        d="M8.9 1.36681C11.56 0.624817 16.04 7.49803 18.7 16.402C21.36 25.3059 21.36 33.4288 18.7 34.1708C16.04 34.9128 11.56 28.0396 8.9 19.1356C6.24 10.2317 6.24 2.10881 8.9 1.36681Z"
        fill={isDefaultFill ?? true ? "#DD5480" : undefined}
      />
    </svg>
  )
}

export { LogoIcon }
