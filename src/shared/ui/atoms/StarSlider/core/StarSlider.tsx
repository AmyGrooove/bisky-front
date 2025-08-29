import { forwardRef, memo } from 'react'
import { Root, Track, Thumb, Range } from '@radix-ui/react-slider'
import { cn } from '@shared/utils/functions'
import { StarIcon } from '@shared/icons'

import { IStarSliderProps } from '../types/IStarSliderProps'

import st from './StarSlider.module.scss'
import { useStarSlider } from './useStarSlider'
import { MAX } from '../static/max'
import { MIN } from '../static/min'
import { MIN_STEPS_BETWEEN_THUMBS } from '../static/MIN_STEPS_BETWEEN_THUMBS'
import { STARS } from '../static/stars'
import { STEP } from '../static/step'

const StarSlider = memo(
  forwardRef<HTMLDivElement, IStarSliderProps>((props, ref) => {
    const { value, handleChange, isDisabled, className, variant } =
      useStarSlider(props)

    return (
      <Root
        ref={ref}
        onValueChange={handleChange}
        value={[value]}
        min={MIN}
        max={MAX}
        step={STEP}
        disabled={isDisabled}
        minStepsBetweenThumbs={MIN_STEPS_BETWEEN_THUMBS}
        className={cn(st.root, className, st[`root_${variant}`])}
      >
        <div className={st.starWrapper}>
          {STARS.map((_, index) => (
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
  }),
)

StarSlider.displayName = 'StarSlider'

export { StarSlider }
