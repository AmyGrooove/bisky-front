import { IIconProps } from "./types/IIconProps"

const FullSizeIcon = (props: IIconProps) => {
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
        d="M0 2.77778C0 1.24367 1.24367 0 2.77778 0H13.8889C15.423 0 16.6667 1.24367 16.6667 2.77778C16.6667 4.31189 15.423 5.55556 13.8889 5.55556H9.48392L18.6309 14.7025C19.7156 15.7873 19.7156 17.5461 18.6309 18.6309C17.5461 19.7156 15.7873 19.7156 14.7025 18.6309L5.55556 9.48392V13.8889C5.55556 15.423 4.31189 16.6667 2.77778 16.6667C1.24367 16.6667 0 15.423 0 13.8889V2.77778ZM36.1111 0H47.2222C48.7564 0 50 1.24367 50 2.77778V13.8889C50 15.423 48.7564 16.6667 47.2222 16.6667C45.6881 16.6667 44.4444 15.423 44.4444 13.8889V9.48392L35.2975 18.6309C34.2128 19.7156 32.4539 19.7156 31.3692 18.6309C30.2844 17.5461 30.2844 15.7873 31.3692 14.7025L40.5161 5.55556H36.1111C34.5769 5.55556 33.3333 4.31189 33.3333 2.77778C33.3333 1.24367 34.5769 0 36.1111 0ZM18.6309 31.3692C19.7156 32.4539 19.7156 34.2128 18.6309 35.2975L9.48392 44.4444H13.8889C15.423 44.4444 16.6667 45.6881 16.6667 47.2222C16.6667 48.7564 15.423 50 13.8889 50H2.77778C1.24367 50 0 48.7564 0 47.2222V36.1111C0 34.5769 1.24367 33.3333 2.77778 33.3333C4.31189 33.3333 5.55556 34.5769 5.55556 36.1111V40.5161L14.7025 31.3692C15.7873 30.2844 17.5461 30.2844 18.6309 31.3692ZM31.3692 31.3692C32.4539 30.2844 34.2128 30.2844 35.2975 31.3692L44.4444 40.5161V36.1111C44.4444 34.5769 45.6881 33.3333 47.2222 33.3333C48.7564 33.3333 50 34.5769 50 36.1111V47.2222C50 48.7564 48.7564 50 47.2222 50H36.1111C34.5769 50 33.3333 48.7564 33.3333 47.2222C33.3333 45.6881 34.5769 44.4444 36.1111 44.4444H40.5161L31.3692 35.2975C30.2844 34.2128 30.2844 32.4539 31.3692 31.3692Z"
      />
    </svg>
  )
}

export { FullSizeIcon }
