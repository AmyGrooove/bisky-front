import { SVGProps } from "react"

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.1386 8.85952C50.2871 10.0056 50.2871 11.8637 49.1386 13.0097L21.8065 40.2809C19.5093 42.5732 15.7848 42.5729 13.4876 40.2809L0.861442 27.6829C-0.287147 26.5369 -0.287147 24.6787 0.861442 23.5327C2.01006 22.3867 3.8723 22.3867 5.02092 23.5327L17.6471 36.1308L44.9792 8.85952C46.1277 7.71349 47.9901 7.71349 49.1386 8.85952Z"
    />
  </svg>
)

export { CheckIcon }
