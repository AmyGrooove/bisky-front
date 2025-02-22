import { IPlayerModuleProps } from '../types/IPlayerModuleProps'
import { usePlayerModule } from './usePlayerModule'
import st from './PlayerModule.module.scss'
import { cn } from '@shared/utils/functions'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

const PlayerModule = (props: IPlayerModuleProps) => {
  const { kodikHref, className } = usePlayerModule(props)

  return (
    <div className={cn(st.root, className)}>
      <Skeleton className={st.skeleton} />
      <iframe
        className={st.kodik}
        src={kodikHref}
        width="auto"
        height="auto"
        allowFullScreen
        allow="autoplay *; fullscreen *"
      />
    </div>
  )
}

export { PlayerModule }
