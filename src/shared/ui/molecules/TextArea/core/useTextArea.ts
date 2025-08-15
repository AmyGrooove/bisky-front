import { ITextAreaProps } from '../types/ITextAreaProps'

const useTextArea = (props: ITextAreaProps) => {
  const {
    value,
    onChange,
    className = null,
    placeholder,
    isDisabled = false,
    errorText,
    label,
  } = props

  return {
    value,
    onChange,
    className,
    placeholder,
    isDisabled,
    errorText,
    label,
  }
}

export { useTextArea }
