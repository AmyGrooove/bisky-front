import { ComponentRef, forwardRef, memo } from 'react'
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider'
import { cn } from '@shared/utils/functions'

import { TSliderProps } from '../types/TSliderProps'

import { useSlider } from './useSlider'
import st from './Slider.module.scss'

const Slider = memo(
  forwardRef<ComponentRef<typeof Root>, TSliderProps>((props, ref) => {
    const {
      flatValue,
      min,
      max,
      step,
      isDisabled,
      className,
      handleChange,
      minStepsBetweenThumbs,
    } = useSlider(props)

    return (
      <Root
        ref={ref}
        onValueChange={handleChange}
        value={flatValue}
        min={min}
        max={max}
        step={step}
        disabled={isDisabled}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        className={cn(st.root, className)}
      >
        <Track className={st.track}>
          <Range className={st.range} />
        </Track>
        {flatValue.map((_, index) => (
          <Thumb key={index} className={st.thumb} />
        ))}
      </Root>
    )
  }),
)

Slider.displayName = 'Slider'

export { Slider }
