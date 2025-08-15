import { TSliderProps, ISliderPropsMulti } from '../types/TSliderProps'

const isMulti = (props: TSliderProps): props is ISliderPropsMulti =>
  Array.isArray(props.value)

export { isMulti }
