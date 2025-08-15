import { useCallback, useMemo } from 'react'

import { isMulti } from '../functions/isMulti'
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
  } = props

  const flatValue = useMemo(() => [value].flat(), [value])

  const handleChange = useCallback(
    (newValue: number[]) => {
      if (isMulti(props)) {
        props.onChange([newValue[0] ?? min, newValue[1] ?? max])
      } else {
        props.onChange(newValue[0])
      }
    },
    [max, min, props],
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
