import { IIconProps } from "./types/IIconProps"

const MaskIcon = (props: IIconProps) => {
  const { isDefaultFill, ...otherProps } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill={isDefaultFill ?? true ? "var(--light-100)" : "currentColor"}
      {...otherProps}
    >
      <path d="M25.0001 14.4109C29.4001 12.8036 33.1501 12 36.2501 12C39.8969 12 43.3942 13.3696 45.9728 15.8076C48.5515 18.2456 50.0001 21.5522 50.0001 25C50.0001 28.4478 48.5515 31.7544 45.9728 34.1924C43.3942 36.6304 39.8969 38 36.2501 38C33.1501 38 29.4001 37.168 25.0001 35.5016C20.6001 37.168 16.8501 38 13.7501 38C10.1034 38 6.60603 36.6304 4.0274 34.1924C1.44878 31.7544 0.00012207 28.4478 0.00012207 25C0.00012207 21.5522 1.44878 18.2456 4.0274 15.8076C6.60603 13.3696 10.1034 12 13.7501 12C16.8501 12 20.6001 12.8036 25.0001 14.4109ZM26.8026 18.8215L25.0001 19.4785L23.1976 18.8215C19.3276 17.408 16.1576 16.7273 13.7501 16.7273C11.4295 16.7273 9.20388 17.5989 7.56294 19.1503C5.92199 20.7017 5.00012 22.8059 5.00012 25C5.00012 27.1941 5.92199 29.2983 7.56294 30.8497C9.20388 32.4011 11.4295 33.2727 13.7501 33.2727C16.1326 33.2727 19.2876 32.5731 23.1426 31.1147L25.0001 30.4104L26.8576 31.1147C30.7126 32.5731 33.8676 33.2727 36.2501 33.2727C38.5708 33.2727 40.7964 32.4011 42.4373 30.8497C44.0783 29.2983 45.0001 27.1941 45.0001 25C45.0001 22.8059 44.0783 20.7017 42.4373 19.1503C40.7964 17.5989 38.5708 16.7273 36.2501 16.7273C33.8426 16.7273 30.6726 17.408 26.8026 18.8215ZM15.0001 28.5455C12.2376 28.5455 10.0001 26.9571 10.0001 25C10.0001 23.0429 12.2376 21.4545 15.0001 21.4545C17.7626 21.4545 20.0001 23.0429 20.0001 25C20.0001 26.9571 17.7626 28.5455 15.0001 28.5455ZM35.0001 28.5455C32.2376 28.5455 30.0001 26.9571 30.0001 25C30.0001 23.0429 32.2376 21.4545 35.0001 21.4545C37.7626 21.4545 40.0001 23.0429 40.0001 25C40.0001 26.9571 37.7626 28.5455 35.0001 28.5455Z" />
    </svg>
  )
}

export { MaskIcon }
