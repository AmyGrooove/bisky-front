import { IIconProps } from "./types/IIconProps"

interface IStarIconProps extends IIconProps {
  variant: "unFilled" | "filled"
}

const StarIcon = (props: IStarIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill={props.isDefaultFill ?? true ? "var(--light-100)" : "currentColor"}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={
        props.variant === "filled"
          ? "M49.8381 18.8403C49.4651 17.7299 48.5039 16.9204 47.3467 16.7434L33.8788 14.6853L27.8294 1.79798C27.3135 0.699495 26.2111 0.000244141 25 0.000244141C23.788 0.000244141 22.6864 0.699495 22.1705 1.79798L16.1203 14.6861L2.65244 16.7442C1.49526 16.9212 0.534115 17.7299 0.16188 18.8411C-0.210354 19.9523 0.0706077 21.1762 0.888888 22.0159L10.7241 32.1015L8.39468 46.3699C8.20261 47.5509 8.70342 48.7383 9.68044 49.4288C10.6567 50.1193 11.9456 50.1891 12.9956 49.6097L25.0008 42.9704L37.0059 49.6097C37.4797 49.8717 38.0012 50.0002 38.5203 50.0002C39.152 50.0002 39.7838 49.8082 40.3211 49.4288C41.2981 48.7391 41.7981 47.5517 41.6061 46.3699L39.2766 32.1015L49.1127 22.0159C49.9294 21.1762 50.2103 19.9523 49.8381 18.8403Z"
          : "M25.002 3.1184L31.7092 17.4748L46.9612 19.8146L35.9153 31.1866L36.2869 33.4684L38.4961 47.0739L25.0005 39.5822L11.5065 47.0787L13.7157 33.4716L14.0857 31.1898L3.04284 19.8146L18.2933 17.4748L19.2956 15.3332L25.002 3.1184ZM25.0005 0.000244141C23.6016 0.000244141 22.3276 0.814025 21.7327 2.08868L16.0778 14.2068L3.0647 16.2034C1.72825 16.4096 0.618195 17.3523 0.187286 18.6399C-0.243623 19.9322 0.0826814 21.3535 1.02569 22.3236L10.5588 32.1535L8.34646 45.7831C8.1232 47.156 8.69931 48.5338 9.8281 49.3379C10.4479 49.7779 11.177 50.0002 11.9077 50.0002C12.5088 50.0002 13.1099 49.8504 13.6548 49.5474L24.9989 43.2434L36.3431 49.5474C36.888 49.8488 37.4906 50.0002 38.0886 50.0002C38.8192 50.0002 39.5468 49.7779 40.1697 49.3379C41.297 48.5354 41.8731 47.1576 41.6483 45.7831L39.4359 32.1535L48.9753 22.3236C49.9198 21.3551 50.243 19.9306 49.8121 18.6399C49.3812 17.3491 48.2696 16.408 46.9347 16.2034L33.9247 14.2068L28.2666 2.08868C27.6765 0.814025 26.4009 0.00185557 24.9989 0.00185557L25.0005 0.000244141Z"
      }
    />
  </svg>
)

export { StarIcon }
