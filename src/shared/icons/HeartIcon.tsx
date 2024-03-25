import { SVGProps } from "react"

const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
    {...props}
  >
    <path d="M0 17.7978C0 30.5093 10.0486 37.2832 17.4043 43.3464C20 45.4859 22.5 47.5002 25 47.5002C27.5 47.5002 30 45.4859 32.5957 43.3464C39.9515 37.2832 50 30.5093 50 17.7978C50 5.08613 36.2495 -3.92872 25 8.2921C13.7504 -3.92872 0 5.08613 0 17.7978Z" />
  </svg>
)

export { HeartIcon }
