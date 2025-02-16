import { cn } from '@shared/utils/functions'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { Text } from '@shared/ui/atoms/Text'

import { ICircleViewsProps } from '../types/ICircleViewsProps'

import st from './CircleViews.module.scss'
import { useCircleViews } from './useCircleViews'

const CircleViews = (props: ICircleViewsProps) => {
  const { isEmpty, variant, className, circleGradient, sumCount } =
    useCircleViews(props)

  return (
    <div className={cn(st.root, className, st[`root_${variant}`])}>
      {isEmpty ? (
        <Skeleton className={st.circle} />
      ) : (
        <div className={st.circle} style={{ background: circleGradient }} />
      )}
      <div className={st.sumCount}>
        <Text size={variant === 'big' ? '40' : '24'} weight="700">
          {String(sumCount)}
        </Text>
      </div>
    </div>
  )
}

export { CircleViews }
