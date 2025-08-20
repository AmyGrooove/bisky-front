import { forwardRef } from 'react'
import { Root, Track, Thumb, Range } from '@radix-ui/react-slider'
import { cn, getEmptyArray } from '@shared/utils/functions'
import { StarIcon } from '@shared/icons'

import { IStarSliderProps } from '../types/IStarSliderProps'

import st from './StarSlider.module.scss'
import { useStarSlider } from './useStarSlider'

const StarSlider = forwardRef<HTMLDivElement, IStarSliderProps>(
  (props, ref) => {
    const { value, handleChange, isDisabled, className, variant } =
      useStarSlider(props)

    return (
      <Root
        ref={ref}
        onValueChange={handleChange}
        value={[value]}
        min={1}
        max={10}
        step={1}
        disabled={isDisabled}
        minStepsBetweenThumbs={1}
        className={cn(st.root, className, st[`root_${variant}`])}
      >
        <div className={st.starWrapper}>
          {getEmptyArray(10).map((_, index) => (
            <StarIcon
              key={index}
              className={cn(st.icon, {
                [st.icon_active]: index + 1 <= value,
              })}
            />
          ))}
        </div>
        <Track className={st.track}>
          <Range className={st.range} />
        </Track>
        <Thumb className={st.thumb} />
      </Root>
    )
  },
)

StarSlider.displayName = 'StarSlider'

export { StarSlider }
