import { IStarSliderProps } from '../types/IStarSliderProps'

const useStarSlider = (props: IStarSliderProps) => {
  const {
    value,
    onChange,
    isDisabled = false,
    className,
    variant = 'big',
  } = props

  const handleChange = (newValue: number[]) => {
    onChange(newValue[0])
  }

  return { value, handleChange, isDisabled, className, variant }
}

export { useStarSlider }
