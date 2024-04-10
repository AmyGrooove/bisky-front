import { SVGProps } from "react"

const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M22.1996 4.58157L9.72284 9.28214C6.84747 10.3573 4.49716 13.7577 4.49716 16.8081V35.3855C4.49716 38.3358 6.44742 42.2113 8.82272 43.9865L19.5741 52.0125C23.0997 54.6628 28.9004 54.6628 32.4259 52.0125L43.1773 43.9865C45.5526 42.2113 47.5029 38.3358 47.5029 35.3855V16.8081C47.5029 13.7327 45.1526 10.3323 42.2772 9.25714L29.8006 4.58157C27.6753 3.80647 24.2748 3.80647 22.1996 4.58157Z"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export { ShieldIcon }
