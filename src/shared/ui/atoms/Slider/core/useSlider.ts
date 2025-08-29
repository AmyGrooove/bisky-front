import { useCallback, useMemo } from 'react'
import { TSliderProps } from '../types/TSliderProps'

const useSlider = (props: TSliderProps) => {
  const {
    value,
    min,
    max,
    step = 1,
    isDisabled = false,
    className,
    minStepsBetweenThumbs = 1,
    onChange,
  } = props

  const isMultiValue = Array.isArray(value)

  const flatValue = useMemo(() => [value].flat(), [value])

  const handleChange = useCallback(
    (newValue: number[]) => {
      if (isMultiValue) {
        ;(onChange as (value: [number, number]) => void)([
          newValue[0] ?? min,
          newValue[1] ?? max,
        ])
      } else {
        ;(onChange as (value: number) => void)(newValue[0] ?? min)
      }
    },
    [isMultiValue, onChange, min, max],
  )

  return {
    flatValue,
    min,
    max,
    step,
    isDisabled,
    className,
    handleChange,
    minStepsBetweenThumbs,
  }
}

export { useSlider }
