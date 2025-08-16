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

  const flatValue = [value].flat()

  const handleChange = (newValue: number[]) => {
    if (isMulti(props)) {
      props.onChange([newValue[0] ?? min, newValue[1] ?? max])
    } else {
      props.onChange(newValue[0])
    }
  }

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
