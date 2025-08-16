import { IIconProps } from '@shared/types'

const PanelTopIcon = (props: IIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="panel-top"
    {...props}
  >
    <path d="M20 10H4V19C4 19.5523 4.44771 20 5 20H19C19.5523 20 20 19.5523 20 19V10ZM20 5C20 4.44771 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V8H20V5ZM22 19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19Z" />
  </svg>
)

export { PanelTopIcon }
