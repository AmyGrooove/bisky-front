import { IIconProps } from '@shared/types'

const KinopoiskIcon = (props: IIconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_4073_12873)">
      <path
        d="M0 0H5.09345V7.37119L10.4028 0H16.5713L7.60492 8.6385L24 0V5.48476L9.27924 10.6953L24 9.39474V14.6053L9.27924 13.2964L24 18.5152V24L7.60492 15.374L16.5845 24H10.416L5.08904 16.6205V24H0V0Z"
        fill="url(#paint0_linear_4073_12873)"
      />
    </g>
    <defs xmlns="http://www.w3.org/2000/svg">
      <linearGradient
        id="paint0_linear_4073_12873"
        x1="-0.3613"
        y1="0.34072"
        x2="22.9128"
        y2="25.025"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF5500" />
        <stop offset="0.06" stop-color="#FF5500" />
        <stop offset="0.41" stop-color="#FF5500" />
        <stop offset="0.44" stop-color="#FB5F00" />
        <stop offset="0.54" stop-color="#EE7F00" />
        <stop offset="0.64" stop-color="#E49900" />
        <stop offset="0.75" stop-color="#DDAB00" />
        <stop offset="0.87" stop-color="#D8B600" />
        <stop offset="0.99" stop-color="#D7B900" />
      </linearGradient>
    </defs>
  </svg>
)

export { KinopoiskIcon }
