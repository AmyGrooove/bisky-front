import { SVGProps } from "react"

const CheckMark = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="currentColor"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.3798 5.01166C36.2067 5.93391 36.2067 7.42912 35.3798 8.35136L15.7007 30.2967C14.0467 32.1412 11.3651 32.141 9.7111 30.2967L0.620239 20.1589C-0.206746 19.2367 -0.206746 17.7414 0.620239 16.8193C1.44724 15.8971 2.78806 15.8971 3.61506 16.8193L12.7059 26.957L32.385 5.01166C33.212 4.08945 34.5528 4.08945 35.3798 5.01166Z"
      />
    </svg>
  )
}

export { CheckMark }
