import {
  CheckIcon,
  DonutIcon,
  EyeIcon,
  EyeOffIcon,
  HeartIcon,
  PlayIcon,
  StarIcon,
  StarOffIcon,
  TrashIcon,
} from '@shared/icons'
import { TListStatus } from '@entities/animeEstimate/types'
import { THistoryTypes } from '@entities/history/types'

import { IHistoryItemProps } from '../../types/IHistoryItemProps'

import st from './HistoryTypeIcon.module.scss'

const AnimeListIcon = (listStatus: TListStatus | null) =>
  listStatus ? (
    {
      added: <EyeIcon className={st.typeIcon} />,
      completed: <CheckIcon className={st.typeIcon} />,
      dropped: <TrashIcon className={st.typeIcon} />,
      watching: <PlayIcon className={st.typeIcon} />,
    }[listStatus]
  ) : (
    <EyeOffIcon className={st.typeIcon} />
  )

const HistoryTypeIcon = (
  value: THistoryTypes,
  historyData: IHistoryItemProps['data']['historyData'],
) => {
  const { animeEstimateScore = null, animeEstimateListStatus = null } =
    historyData

  return {
    animeScore: animeEstimateScore ? (
      <StarIcon className={st.typeIcon} />
    ) : (
      <StarOffIcon className={st.typeIcon} />
    ),
    animeList: AnimeListIcon(animeEstimateListStatus),
    fastFind: <DonutIcon className={st.typeIcon} />,
    animeFavorite: <HeartIcon className={st.typeIcon} />,
  }[value]
}

export { HistoryTypeIcon }
