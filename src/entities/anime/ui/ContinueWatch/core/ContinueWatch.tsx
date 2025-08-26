import Link from 'next/link'
import { cn } from '@shared/utils/functions'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'

import { IContinueWatchProps } from '../types/IContinueWatchProps'

import { useContinueWatch } from './useContinueWatch'
import st from './ContinueWatch.module.scss'
import { EditEpisodeButton } from './EditEpisodeButton/core/EditEpisodeButton'

const ContinueWatch = (props: IContinueWatchProps) => {
  const { episodeProgressData, className, variant, episodeInfo } =
    useContinueWatch(props)

  return (
    <Link
      href={`/anime/${episodeProgressData.slug}/player/${episodeProgressData.order}`}
      className={cn(st.root, className, st[`root_${variant}`])}
    >
      <PlaceholderImage
        src={episodeProgressData.previewImage}
        sizes={[388, 180]}
        className={st.image}
      />
      <div className={st.background} />
      <div className={st.infoWrapper}>
        <Text className={st.name}>{episodeProgressData.name}</Text>
        <Text className={st.infoText}>{episodeInfo}</Text>
      </div>

      <EditEpisodeButton
        variant={variant}
        buttonClassName={st.editEpisodeButton}
        progressBarClassName={st.progressBar}
        episodeProgressData={episodeProgressData}
      />
    </Link>
  )
}

export { ContinueWatch }
