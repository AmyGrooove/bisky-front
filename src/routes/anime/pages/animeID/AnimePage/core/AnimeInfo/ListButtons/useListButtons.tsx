import { TListStatus } from '@entities/animeEstimate/types'
import {
  getEstimateColor,
  getListStatusIcon,
  getScoreColor,
} from '@entities/animeEstimate/utils'
import { ComponentProps, useEffect, useMemo, useState } from 'react'
import { IAnimeSectionProps } from '../../../types/IAnimeSectionProps'
import { cn, isNil } from '@shared/utils/functions'
import { CassetteTapeIcon, HeartIcon, StarIcon } from '@shared/icons'
import { BigButton } from '@shared/ui/molecules/BigButton'
import { AddInListModal } from '@entities/animeEstimate/ui/AddInListModal'
import { setModal } from '@widgets/ModalWrapper'
import st from './ListButtons.module.scss'
import { SetScoreModal } from '@entities/animeEstimate/ui/SetScoreModal'
import { useSetAnimeFavorite } from '@entities/animeEstimate/api/setAnimeFavorite'

const useListButtons = (props: IAnimeSectionProps) => {
  const {
    data: {
      _id,
      userEstimate: { listStatus, score, isFavorite },
    },
  } = props

  const { mutateAsync: setAnimeFavorite } = useSetAnimeFavorite()

  const [currentStatus, setCurrentStatus] = useState<TListStatus | null>(
    listStatus,
  )
  const [currentScore, setCurrentScore] = useState<number | null>(score)
  const [isInFavorite, setIsInFavorite] = useState(isFavorite)

  const addAnimeInFavorite = async () => {
    setIsInFavorite(!isInFavorite)
    await setAnimeFavorite({ animeID: _id, isFavorite: !isInFavorite })
  }

  const estimateButton: ComponentProps<typeof BigButton> = useMemo(
    () => ({
      children: isNil(currentStatus) ? 'в список' : 'изменить',
      Icon: isNil(currentStatus)
        ? CassetteTapeIcon
        : getListStatusIcon(currentStatus),
      onClick: (event) => {
        event.preventDefault()
        setModal(
          <AddInListModal
            selectedListStatus={currentStatus}
            _id={_id}
            setStatus={setCurrentStatus}
          />,
        )
      },
      className: cn(
        st.button,
        st[`button_estimate_${getEstimateColor(currentStatus)}`],
      ),
    }),
    [currentStatus],
  )

  const scoreButton: ComponentProps<typeof BigButton> = useMemo(
    () => ({
      children: isNil(currentScore) ? 'оценить' : 'изменить',
      Icon: StarIcon,
      iconText: isNil(currentScore) ? undefined : String(currentScore),
      onClick: (event) => {
        event.preventDefault()
        setModal(
          <SetScoreModal
            _id={_id}
            setScore={setCurrentScore}
            selectedScore={currentScore}
          />,
        )
      },
      className: isNil(currentScore)
        ? st.button
        : cn(st.button, st[`button_score_${getScoreColor(currentScore)}`]),
      isDisabled: isNil(currentStatus),
    }),
    [currentStatus, currentScore],
  )

  const favoriteButton: ComponentProps<typeof BigButton> = useMemo(
    () => ({
      children: !isInFavorite ? 'в избранное' : 'удалить',
      Icon: HeartIcon,
      onClick: async (event) => {
        event.preventDefault()
        await addAnimeInFavorite()
      },
      className: cn(st.button, { [st.button_favorite_active]: isInFavorite }),
      isDisabled: isNil(currentStatus),
    }),
    [currentStatus, isInFavorite],
  )

  useEffect(() => {
    if (currentStatus === null && currentScore !== null) setCurrentScore(null)
    if (currentStatus === null && isInFavorite) setIsInFavorite(false)
  }, [currentStatus, currentScore, isInFavorite])

  return { estimateButton, scoreButton, favoriteButton }
}

export { useListButtons }
