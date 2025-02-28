import { IChangingStatusProps } from '../../types/IChangingStatusProps'
import { useChangingStatus } from './useChangingStatus'
import st from './ChangingStatus.module.scss'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { cn, isNil } from '@shared/utils/functions'
import { Fancybox } from '@shared/ui/atoms/Fancybox'
import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import { InfoIcon } from '@shared/icons'
import { setModal } from '@widgets/ModalWrapper'
import { MiniAnimeInfoModal } from '@entities/anime/ui/MiniAnimeInfoModal'
import { AddInListButton } from '@entities/animeEstimate/ui/AddInListButton'

const ChangingStatus = (props: IChangingStatusProps) => {
  const {
    selectedStatus,
    posterHref,
    ListIcon,
    animeData,
    selectedPreviousStatus,
  } = useChangingStatus(props)

  return (
    <div className={st.root}>
      <Fancybox className={st.desktopPoster}>
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
      <div
        className={st.mobilePoster}
        onClick={() => setModal(<MiniAnimeInfoModal data={animeData} />)}
      >
        <PlaceholderImage
          className={st.poster}
          src={posterHref}
          sizes={[220, 280]}
        />
        <Button
          Icon={InfoIcon}
          variant="big"
          className={st.info}
          onClick={() => setModal(<MiniAnimeInfoModal data={animeData} />)}
        />
        {!isNil(selectedPreviousStatus) && (
          <AddInListButton
            selectedListStatus={selectedPreviousStatus}
            className={cn(st.listStatus, st.listStatus_mobile)}
          />
        )}
      </div>
      {!isNil(selectedStatus) && (
        <div className={cn(st.changing, st[`changing_${selectedStatus}`])}>
          <ListIcon className={cn(st.icon, st[`icon_${selectedStatus}`])} />
        </div>
      )}
      <Text weight="700" className={st.label} maxLines={2}>
        {animeData?.label ?? ''}
      </Text>
      {!isNil(selectedPreviousStatus) && (
        <AddInListButton
          selectedListStatus={selectedPreviousStatus}
          className={cn(st.listStatus, st.listStatus_desktop)}
        />
      )}
    </div>
  )
}

export { ChangingStatus }
