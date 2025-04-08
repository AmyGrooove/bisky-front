import { useInView } from 'react-intersection-observer'
import { useRef, useEffect, ForwardedRef, useState } from 'react'
import { mergeRefs } from '@shared/utils/functions'

import { IInputFieldProps } from '../types/IInputFieldProps'

const useInputField = (
  props: IInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const {
    value,
    onChange,
    Icon = null,
    className = null,
    placeholder,
    isDisabled = false,
    errorText,
    label,
    type = 'text',
    isAutoFocus = false,
    inputClassName,
  } = props

  const [isPasswordShow, setIsPasswordShow] = useState(false)

  const { ref: inViewRef, inView } = useInView({ threshold: 1 })
  const inputRef = useRef<HTMLInputElement>(null)

  const mergedRefs = mergeRefs(ref, inputRef)

  useEffect(() => {
    if (inView && isAutoFocus) inputRef.current?.focus()
  }, [inView])

  return {
    value,
    onChange,
    Icon,
    className,
    placeholder,
    isDisabled,
    errorText,
    label,
    type,
    mergedRefs,
    inViewRef,
    inputClassName,
    isPasswordShow,
    setIsPasswordShow,
  }
}

export { useInputField }
