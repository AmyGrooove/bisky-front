import { IIconProps } from "./types/IIconProps"

const PlayIcon = (props: IIconProps) => {
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
        d="M42.4632 18.3808L14.5053 1.01561C9.82462 -1.88986 4 1.78608 4 7.63522V42.3638C4 48.2205 9.82462 51.8889 14.5053 48.9834L42.4632 31.627C47.1789 28.6986 47.1789 21.3091 42.4632 18.3808Z"
      />
    </svg>
  )
}

export { PlayIcon }
