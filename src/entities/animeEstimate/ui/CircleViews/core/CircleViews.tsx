import { cn } from '@shared/utils/functions'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { Text } from '@shared/ui/atoms/Text'

import { ICircleViewsProps } from '../types/ICircleViewsProps'

import st from './CircleViews.module.scss'
import { useCircleViews } from './useCircleViews'

const CircleViews = (props: ICircleViewsProps) => {
  const { isEmpty, className, circleGradient, sumCount } = useCircleViews(props)

  return (
    <div className={cn(st.root, className)}>
      {isEmpty ? (
        <Skeleton className={st.circle} />
      ) : (
        <div className={st.circle} style={{ background: circleGradient }} />
      )}
      <div className={st.sumCount}>
        <Text className={st.sumCount} weight="700">
          {String(sumCount)}
        </Text>
      </div>
    </div>
  )
}

export { CircleViews }
