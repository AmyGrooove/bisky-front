import { IIconProps } from "./types/IIconProps"

const ArrowIcon = (props: IIconProps) => {
  const { isDefaultFill, ...otherProps } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill={isDefaultFill ?? true ? "var(--light-100)" : "currentColor"}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8461 0.915283C13.9743 -0.305094 15.8035 -0.305094 16.9317 0.915283L37.1539 22.7903C38.282 24.0107 38.282 25.9894 37.1539 27.2097L16.9317 49.0848C15.8035 50.3051 13.9743 50.3051 12.8461 49.0848C11.718 47.8644 11.718 45.8857 12.8461 44.6654L31.0257 25L12.8461 5.33473C11.718 4.11432 11.718 2.13569 12.8461 0.915283Z"
      />
    </svg>
  )
}

export { ArrowIcon }
