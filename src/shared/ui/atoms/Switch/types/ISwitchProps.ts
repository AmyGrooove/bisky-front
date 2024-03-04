import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface ISwitchProps {
  inputProps?: {
    attributes: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  }
  labelProps?: { className: string }
}

export type { ISwitchProps }
