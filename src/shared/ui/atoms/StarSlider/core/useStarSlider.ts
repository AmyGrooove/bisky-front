import { useCallback, useMemo } from 'react'
import { getEmptyArray } from '@shared/utils/functions'

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

  const stars = useMemo(() => getEmptyArray(10), [])

  return { value, handleChange, isDisabled, className, variant, stars }
}

export { useStarSlider }
