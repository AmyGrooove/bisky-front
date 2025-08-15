interface ISliderPropsBase {
  min: number
  max: number

  step?: number
  isDisabled?: boolean
  minStepsBetweenThumbs?: number
  className?: string
}

interface ISliderPropsSingle extends ISliderPropsBase {
  value: number
  onChange: (value: number) => void
}

interface ISliderPropsMulti extends ISliderPropsBase {
  value: [number, number]
  onChange: (value: [number, number]) => void
}

type TSliderProps = ISliderPropsSingle | ISliderPropsMulti

export type { TSliderProps, ISliderPropsMulti }
