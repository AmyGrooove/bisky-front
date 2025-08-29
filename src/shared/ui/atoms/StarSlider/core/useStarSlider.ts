import { useCallback } from 'react'
import { IStarSliderProps } from '../types/IStarSliderProps'

const useStarSlider = (props: IStarSliderProps) => {
  const {
    value,
    onChange,
    isDisabled = false,
    className,
    variant = 'big',
  } = props

  const handleChange = useCallback(
    (newValue: number[]) => {
      onChange(newValue[0])
    },
    [onChange],
  )

  return { value, handleChange, isDisabled, className, variant }
}

export { useStarSlider }
