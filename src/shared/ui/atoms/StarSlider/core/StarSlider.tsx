import { cn, getEmptyArray } from '@shared/utils/functions'

import { IStarSliderProps } from '../types/IStarSliderProps'

import st from './StarSlider.module.scss'
import { useStarSlider } from './useStarSlider'
import { StarIcon } from '@shared/icons'
import { TOTAL_STARS } from '../static/TOTAL_STARS'

const StarSlider = (props: IStarSliderProps) => {
  const {
    className,
    containerRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    currentStar,
  } = useStarSlider(props)

  return (
    <div
      className={cn(st.root, className)}
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {getEmptyArray(TOTAL_STARS).map((_, index) => (
        <StarIcon
          key={index}
          className={cn(st.icon, { [st.icon_selected]: index < currentStar })}
          isCustomColor
        />
      ))}
    </div>
  )
}

export { StarSlider }
