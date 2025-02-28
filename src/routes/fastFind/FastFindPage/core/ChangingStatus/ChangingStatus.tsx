import { IChangingStatusProps } from '../../types/IChangingStatusProps'
import { useChangingStatus } from './useChangingStatus'
import st from './ChangingStatus.module.scss'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { cn, isNil } from '@shared/utils/functions'
import { Fancybox } from '@shared/ui/atoms/Fancybox'

const ChangingStatus = (props: IChangingStatusProps) => {
  const { selectedStatus, posterHref, ListIcon } = useChangingStatus(props)

  return (
    <div className={st.root}>
      <Fancybox>
        <a
          href={posterHref ?? ''}
          target="_blank"
          rel="noopener noreferrer"
          data-fancybox="gallery"
        >
          <PlaceholderImage
            className={st.poster}
            src={posterHref}
            sizes={[220, 280]}
          />
        </a>
      </Fancybox>
      {!isNil(selectedStatus) && (
        <div className={cn(st.changing, st[`changing_${selectedStatus}`])}>
          <ListIcon className={cn(st.icon, st[`icon_${selectedStatus}`])} />
        </div>
      )}
    </div>
  )
}

export { ChangingStatus }
